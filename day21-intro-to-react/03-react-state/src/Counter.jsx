// Don't forget to import method useState from React! Without it, there's no state functionality
import { useState } from 'react'

const Counter = () => {

    {/* First initialize the counter part of the state with value 0
        the state returns array of the actual value AND the appropriate setter - which
        is the ONLY way we can change that particular state */}
    const [counter, setCounter] = useState(0)
    {/* Now we can have a look what these look like - the value and the setter. No need to
        bother with exactly what the setter is, it's enough to know it is a function */}
    console.log(counter)
    console.log(setCounter)
    {/* Let's just initialize another part of the state and its appropriate setter - we won't use
        it, but now we see that each and every part of the state goes with its own setter */}
    const [color, setColor] = useState('red')
    {/* Now let's store the result of the useState function call into a single variable */}
    const useStateDemo = useState('demo')
    {/* See? No magic, just a regular array which is deconstructed by the
        const [value, setValue] = useState('something') syntax */}
    console.log(useStateDemo)

    const raiseCounter = () => {
        {/* Don't forget, it's a SETTER - we are setting the new value of state TO something */}
        setCounter(counter + 1)
    }

    return (
        <>
            <p>You clicked the {color} button {counter} times</p>
            <button onClick={raiseCounter}>Click me!</button>
        </>
    )
}

export default Counter 