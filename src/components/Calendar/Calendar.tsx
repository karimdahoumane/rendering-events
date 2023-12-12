import './Calendar.css';
import Event from 'src/components/Event';
import useCalendar from './Calendar.hook';
import { IEvent } from 'src/types/event';

const Calendar = ({ slots }: { slots: string[] }) => {
  const { groups, expand } = useCalendar();

  return (
    <>
      <div className="calendar">
        <div className="slot-lines">
          {slots.map((_slot, index) => (
            <div
              className="slot-line"
              style={{
                height: slots.length + "%",
              }}
              key={`slot-${index}`}
            />
          ))}
        </div>
        {groups.map((cols: IEvent[][]) =>
          cols.map((col: IEvent[], colIdx) =>
            col.map((event: IEvent) => (
              <Event
                slots={slots}
                event={event}
                widthPercent={
                  expand(event, colIdx, cols) / cols.length
                }
                leftPercent={colIdx / cols.length}
                key={event.id}
              />
            ))
          )
        )}
      </div>
    </>
  );

}

export default Calendar;
