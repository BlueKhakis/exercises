const Button = () => {

    const harvestData = (e) => {
        {/* in order to prevent the default behavior of the element sending the event, we need to disable it */}
        e.preventDefault();
        console.log('Harvesting data, selling data')
    }

    const disable = (e) => {
        e.preventDefault()
    }

    {/* We assign the function harvestData to be executed when the anchor is clicked - almost like in HTML,
        but with a React twist - the event is written in snakeCase
    
        The argument for the event is always a FUNCTION - harvestData, never ever COMMAND to execute a function!!! */}
    return <a href="http://www.facebook.com" onClick={harvestData}>
        Sign into Facebook
    </a>
}

export default Button