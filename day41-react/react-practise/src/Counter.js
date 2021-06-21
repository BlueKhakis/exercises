import React, {useState} from 'react';
import ButtonPlus from "./ButtonPlus";

function Counter( props ) {
    const [counter, setCounter] = useState( 0 );

    return (
        <div>
            <p>Count: {counter}</p>

            <ButtonPlus
                counter={counter}
                setCounter={setCounter}
            />

            <button onClick={() => {
                setCounter( counter - 1 )
            }}>
                -
            </button>
        </div>
    )
}

export default Counter;