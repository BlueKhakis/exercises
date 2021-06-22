import {useState} from 'react';

import Counter from "./Counter";

function App() {
    const [globalCounter, setGlobalCounter] = useState( 0 );

    return (
        <>
            {/*<Counter globalCounter={globalCounter}/>*/}
            <Counter globalCounter={globalCounter}/>
            <Counter globalCounter={globalCounter}/>

            <button onClick={() => {
                setGlobalCounter( globalCounter + 1 )
            }}>
                Increment All
            </button>

            <button onClick={() => {
                setGlobalCounter( globalCounter - 1 )
            }}>
                Decrement All
            </button>
        </>
    );
}

export default App;
