import './App.css';
import Weather from "./Weather";
import {useState} from "react";
import WeatherDetail from "./WeatherDetail";

function App() {
    const weather = require( './weather.json' );

    const [day, setDay] = useState( 0 );

    return (
        <div className="App">
            <h1>Weather Forecast</h1>

            <Weather
                weather={weather}
                setDay={setDay}
            />

            <WeatherDetail
                dayWeather={weather[day]}
            />
        </div>
    );
}

export default App;
