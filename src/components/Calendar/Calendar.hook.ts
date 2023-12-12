import { useEffect, useState } from 'react';
import { IEvent, ITimeSlot } from 'src/types/event';
import { getEvents } from 'src/api/events';

const useCalendar = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const groups: IEvent[][][] = [];
  let columns: IEvent[][] = [];
  let lastEventEnding: Date | undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await getEvents();
        setEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  const collides = (a: ITimeSlot, b: ITimeSlot): boolean => {
    return a.to > b.from && a.from < b.to;
  }

  const expand = (
    event: IEvent,
    colIdx: number,
    columns: IEvent[][]
  ): number => {
    let colSpan = 1;
    columns.slice(colIdx + 1).some((column) => {
      if (column.some((evt) => collides(getTimeSlot(event), getTimeSlot(evt))))
        return true;
      colSpan++;
      return false;
    });
    return colSpan;
  }

  const getTimeSlot = (event: IEvent): ITimeSlot => {
    const from = new Date("2021-01-01T" + event.start);
    const to = new Date(from.getTime() + event.duration * 60 * 1000);
    return { from, to };
  }

  const startNewGroupIfNecessary = (event: IEvent): void => {
    if (lastEventEnding && getTimeSlot(event).from >= lastEventEnding) {
      groups.push(columns);
      columns = [];
      lastEventEnding = undefined;
    }
  }

  const addEventToColumn = (event: IEvent): void => {
    for (const column of columns) {
      if (!column.some((evt) => collides(getTimeSlot(evt), getTimeSlot(event)))) {
        column.push(event);
        return;
      }
    }
    columns.push([event]);
  }

  const sortEvents = (event1: IEvent, event2: IEvent): number => {
    const timeSlot1 = getTimeSlot(event1);
    const timeSlot2 = getTimeSlot(event2);
    if (timeSlot1.from < timeSlot2.from) return -1;
    if (timeSlot1.from > timeSlot2.from) return 1;
    if (timeSlot1.to < timeSlot2.to) return -1;
    if (timeSlot1.to > timeSlot2.to) return 1;
    return 0;
  }

  const saveLastEventEnding = (event: IEvent): void => {
    if (!lastEventEnding || getTimeSlot(event).to > lastEventEnding)
      lastEventEnding = getTimeSlot(event).to;
  }

  events
    .sort(sortEvents)
    .forEach((event) => {
      startNewGroupIfNecessary(event);
      addEventToColumn(event);
      saveLastEventEnding(event);
    });
  groups.push(columns);

  return {
    groups,
    expand,
  };
};

export default useCalendar;