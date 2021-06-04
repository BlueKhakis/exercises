import React from 'react';

export default function Celebrity( props ) {
    return (
        <div className="celebrity">
            <img src={props.photo} alt={props.name}/>
            <div className="text">
                <h2>{props.name}</h2>
                <div className="earnings">
                    <h3>Earnings:</h3>{props.earnings}
                </div>
                <div className="age">
                    <h3>Age:</h3>{props.age}
                </div>
                <div className="citizenship">
                    <h3>Citizenship:</h3>{props.citizenship}
                </div>
                <div className="events">
                    <ul>
                        {
                            props.events.map( ( event, index ) => (
                                <li key={index}>{event}</li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}