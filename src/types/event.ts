interface IEvent {
  id: number;
  start: string;
  duration: number;
}

interface ITimeSlot {
  from: Date;
  to: Date;
}

export type { IEvent, ITimeSlot };