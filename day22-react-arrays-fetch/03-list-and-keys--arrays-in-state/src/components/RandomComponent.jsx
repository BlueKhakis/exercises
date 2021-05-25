import { useState } from 'react'

const RandomComponent = () => {
    const [value, setValue] = useState(0)

    return (
        <div className="random-component">
            {/* turns out we can use JSX syntax even in the seemingly "plain JS" part of the script, after
                escaping the JSX-only part with {}. Also turns out, that we can provide an array of elements
                in that part - [<p></p>,<p></p>] - and it would turn out the same as not escaping the JSX in
                first place and simply typing <p></p><p></p>.
                As useless at it seems, it's actually why the map functions used later even works */}
            { [ <p>My random component has a value.</p>,
            <p>Wanna know what that value is, you lot?</p> ] }
            <p>I'll tell you, but only you... It's {value}</p>
        </div>
    )
}

export default RandomComponent