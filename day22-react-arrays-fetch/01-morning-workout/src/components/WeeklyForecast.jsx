import DayForecast from './DayForecast'
import {forecast} from '../forecast.js'

const WeeklyForecast = () => {

    return (
        <div className="week-forecast">
            {/* See this atrocity? ...and that is why you should understand how to work with arrays in React,
                how to turn array of values into array of elements, so you never ever have to do this again :) */}
            <DayForecast dailyInfo={forecast[0]} />
            <DayForecast dailyInfo={forecast[1]} />
            <DayForecast dailyInfo={forecast[2]} />
            <DayForecast dailyInfo={forecast[3]} />
            <DayForecast dailyInfo={forecast[4]} />
            <DayForecast dailyInfo={forecast[5]} />
            <DayForecast dailyInfo={forecast[6]} />
        </div>
    )    
}

export default WeeklyForecast