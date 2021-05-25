import logo from './logo.svg';
import './style.css';
import WeeklyForecast from './components/WeeklyForecast'

function App() {
  return (
    <div className="container">

      <h1>Weekly Weather Forecast</h1>

      <WeeklyForecast />
      
    </div>
  );
}

export default App;
