import './Event.css'
import useEvent from './Event.hook';
import { IEvent } from 'src/types/event';

const Event = ({ slots, event, widthPercent, leftPercent }: { slots: string[], event: IEvent, widthPercent: number, leftPercent: number }) => {
  const { calculateEventStyle } = useEvent(slots, event, widthPercent, leftPercent);
  const eventId = event.id.toString();
  const eventStyle = calculateEventStyle();

  return (
    <>
      <div id={eventId} data-testid={eventId} className='event' style={eventStyle} >
        <div className='title'>{event.id}</div>
      </div >
    </>
  );
}

export default Event;