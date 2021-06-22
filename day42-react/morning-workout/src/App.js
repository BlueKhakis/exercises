import './App.css';
import Weather from "./Weather";
import {useState} from "react";
import WeatherDetail from "./WeatherDetail";

function App() {
    const [day, setDay] = useState( 0 );

    const weather = require( './weather.json' );


    return (
        <div className="App">
            <h1>Weather Forecast</h1>
            <Weather weather={weather} setDay={setDay}/>
            <WeatherDetail dayWeather={weather[day]}/>
        </div>
    );
}

export default App;
