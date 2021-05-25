import { useState } from 'react'

const ListWithArrayState = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5])

    const handleClick = () => {
        /* the principle of changing the array state is shown here. Everything else - multiplying the numbers,
            multiplying the whole list or even removing... it's just a different variant of the same thing:
            1) create a NEW array based on current state - const newArray = oldArray doesn't create new array,
                e.g. .map or .filter produce new arrays, but e.g. .push, .shift mutate the old one, .
            1.5) change the new array in a way you need to - add values, remove values, update values,...
            2) set the state to the new array
            3) if console.log(newArray) shows updated value, but no update on screen, go back to 1
                and make sure you are actually creating a new array and not just mutating the old one */
        const newNumbers = numbers.concat(8)
        console.log(newNumbers)
        setNumbers(newNumbers)
    }

    return (
        <div className="random-component">
            <button onClick={handleClick}>Add Item</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}
                        <button onClick={() => {
                                const newList = numbers.map((number, j) => {
                                if(index === j) return number * 2;  
                                else return number;
                            });
                            console.log(newList);
                            setNumbers(newList);
                        }}>
                        double
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={() => {
                const newList = numbers.map((number) => number * 2);
                console.log(newList);
                setNumbers(newList);
                }}>
                double all numbers
            </button>
        </div>
    )
}

export default ListWithArrayState