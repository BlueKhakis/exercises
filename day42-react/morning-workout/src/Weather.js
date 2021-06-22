import React, {useState} from 'react';

export default function Weather( props ) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {
                props.weather.map( ( day, i ) => (
                    <div key={i}>
                        <h2>{day.day}</h2>
                        <p>Min: {day.min}</p>
                        <p>Max: {day.max}</p>
                        <button
                            onClick={() => props.setDay( i )}
                        >
                            Detail
                        </button>
                    </div>
                ) )
            }
        </div>
    )
}