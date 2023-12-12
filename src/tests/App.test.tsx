import { getAllByTestId, queryByTestId, render } from '@testing-library/react';
import Calendar from 'src/components/Calendar';
import Slots from 'src/components/Slots';
import Event from 'src/components/Event';

const slots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

describe('Slots Component', () => {

  it('renders without errors', () => {
    const { getByTestId } = render(
      <Slots slots={slots} />
    );
    const slotElement = getByTestId("slot-0");
    expect(slotElement).toBeInTheDocument();
  });

  it('renders the correct number of slots', () => {
    const { getAllByTestId } = render(
      <Slots slots={slots} />
    );
    const slotElements = getAllByTestId(/slot-\d+/);
    expect(slotElements).toHaveLength(slots.length);
  });


  it('applies the correct height to each slot', () => {
    const { getByTestId } = render(<Slots slots={slots} />);

    slots.forEach((_, i) => {
      const slotElement = getByTestId(`slot-${i}`);
      expect(slotElement).toHaveStyle(`
        height: ${slots.length}%;
      `);
    });
  });
}
);

describe('Event Component', () => {
  const mockEvent = {
    id: 1,
    start: '10:30:00',
    duration: 60,
  };

  it('renders without errors', () => {
    const { getByText } = render(
      <Event slots={slots} event={mockEvent} widthPercent={0.5} leftPercent={0.25} />
    );

    const eventElement = getByText(mockEvent.id.toString());
    expect(eventElement).toBeInTheDocument();
  });

  it('renders the correct text', () => {
    const { getByText } = render(
      <Event slots={slots} event={mockEvent} widthPercent={0.5} leftPercent={0.25} />
    );

    const eventElement = getByText(mockEvent.id);
    expect(eventElement).toHaveTextContent(mockEvent.id.toString());
  });

  it('applies the correct styles', () => {
    const { getByTestId } = render(
      <Event slots={slots} event={mockEvent} widthPercent={0.5} leftPercent={0.25} />
    );

    const eventElement = getByTestId(mockEvent.id);

    expect(eventElement).toHaveStyle('height: 8.333333333333334%');
    expect(eventElement).toHaveStyle('width: 49.8%');
    expect(eventElement).toHaveStyle('top: 12.5%');
    expect(eventElement).toHaveStyle('left: 25%');
  });
});

describe('Calendar Component', () => {
  const mockEvents =
    [
      {
        id: 1,
        start: '10:30',
        duration: 60,
      },
      {
        id: 2,
        start: '10:45',
        duration: 120,
      },
      {
        id: 3,
        start: '11:00',
        duration: 30,
      }
    ];

  it('renders without errors', () => {
    render(
      <Calendar slots={slots} />
    );
  });
});