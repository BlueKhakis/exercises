
const List = () => {
    const numbers = [1,2,3,4,5]

    return (
        <div className="random-component">
            <ul>
            {/* as explained in the List component, the following array of list items is a valid input, in fact
                it is something we will want to turn our array of numbers into */}
            {/* {[<li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>]} */}

            {/* ...and we do it by using a map method on the original array numbers */}
            {/* {numbers.map((number) => (<li>{number}</li>))} */}

            {/* ...and now we do it again, just this time around with unique keys */}
            {numbers.map((number, index) => (<li key={index}>{number}</li>))}
            </ul>
        </div>
    )
}

export default List