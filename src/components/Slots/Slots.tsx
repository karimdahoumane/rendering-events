import './Slots.css';
import useSlots from './Slots.hook';

const Slots = ({ slots }: { slots: string[] }) => {
  const { calculateSlotStyle } = useSlots({ slots });
  const style = calculateSlotStyle();

  return (
    <div id="slots" className="slots">
      {slots.map((slot, i: number) => (
        <div className="slot" data-testid={"slot-" + i} key={i} style={style}>{slot}</div>
      ))}
    </div>
  );
}

export default Slots;