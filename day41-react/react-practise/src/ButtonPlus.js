import React, {useState} from 'react';

export default function ButtonPlus( props ) {
    return (
        <button onClick={() => {
            console.log('button plus clicked');
            props.setCounter(props.counter + 1);
        }}>
            +
        </button>
    )
}