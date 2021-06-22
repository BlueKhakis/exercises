import React, {useState} from 'react';

export default function WeatherDetail( props ) {
    return (
        <div>
            <h2>{props.dayWeather.day}</h2>
            <p>Min: {props.dayWeather.min}</p>
            <p>Max: {props.dayWeather.max}</p>
            <p>Wind: {props.dayWeather.wind}</p>
            <p>Humidity: {props.dayWeather.humidity}</p>
            <p>Percipitation: {props.dayWeather.percipitation}</p>
        </div>
    )
}