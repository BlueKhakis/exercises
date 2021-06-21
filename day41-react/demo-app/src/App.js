import {useState} from "react";
import Greeting from './Greeting';

function App() {
    const [name, setName] = useState( 'world' );

    let secondName = 'world';

    return (
        <div>
            <Greeting name="world"/>
            <Greeting name="Slavo"/>
            <Greeting name="Ondrej"/>

            <Greeting name={name}/>
            <Greeting name={secondName}/>

            <button onClick={() => {
                setName('Ondrej');
                // secondName = 'Ondrej';
                // console.log(secondName);
            }}>
                Greet Ondrej!
            </button>

            <button onClick={() => {
                setName('Slavo');
                // secondName = 'Slavo';
                // console.log(secondName);
            }}>
                Greet Slavo!
            </button>

        </div>
    );
}

export default App;