import { IEvent } from 'src/types/event';

const useEvent = (slots: string[], event: IEvent, widthPercent: number, leftPercent: number) => {
  const MINUTES_IN_HOUR = 60;
  const MAX_HEIGHT = 100;
  const MAX_WIDTH = 100;

  const calculateEventStyle = () => {
    const date = new Date(`2021-01-01T${event.start}`);
    const firstSlot: number = parseInt(slots[0].split(':')[0]);

    const height = (event.duration * MAX_HEIGHT) / (MINUTES_IN_HOUR * slots.length);
    const width = (widthPercent * MAX_WIDTH) - 0.2;
    const top = (((date.getHours() - firstSlot) * MINUTES_IN_HOUR + date.getMinutes()) * MAX_HEIGHT) / (MINUTES_IN_HOUR * slots.length);
    const left = leftPercent * MAX_WIDTH;

    return {
      height: `${height}%`,
      width: `${width}%`,
      top: `${top}%`,
      left: `${left}%`,
    };
  };

  return {
    calculateEventStyle,
  };

}

export default useEvent;