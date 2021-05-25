const DayForecast = (props) => {

    console.log(props);
    return (
        <div className="day-forecast">
            <div className="day-forecast__header">{props.dailyInfo.weekday}</div>
                <div className="day-forecast__body">
                {/* this was the slightly tricky part - how to change the className being provided as a string
                    to className being provided as a calculated value dependant on the props
                    The answer is actually just doing exactly what we said in previous sentence:
                    We escape the JSX to JS with {} and inside, we put an expression that evaluates to
                    intended string - `part-of-string-${props.property-we-want}-another-part-of-string` */}
                <div className={`day-forecast__image weather-${props.dailyInfo.weather}`}></div>
                <div className="day-forecast__temps">
                    <span className="temp-day">{props.dailyInfo.tempDay}°</span>
                    <span className="temp-night">{props.dailyInfo.tempNight}°</span>
                </div>
            </div>
        </div>
    )    
}

export default DayForecast