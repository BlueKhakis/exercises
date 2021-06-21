import React, {useState} from 'react';

export default function Counter( props ) {
    const [counter, setCounter] = useState( 0 );

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter( counter + 1 )}>+</button>
            <button onClick={() => setCounter( counter - 1 )}>-</button>
        </div>
    )
}