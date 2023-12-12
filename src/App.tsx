import './App.css'
import Calendar from "src/components/Calendar";
import Slots from './components/Slots';

const App = () => {

  const slots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

  return (
    <div className='container'>
      <Slots slots={slots} />
      <Calendar slots={slots} />
    </div>
  );
}

export default App;
