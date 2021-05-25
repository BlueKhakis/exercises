import { useEffect, useState } from 'react'

const UselessFact = () => {

    const [data,setData] = useState({loaded:false, content:null})

    const fetchData = () => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response) => response.json())
        .then((json) => setData({loaded:true, content:json}))
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className="useless-fact">
            {!true ?
                <p>Still Loading</p>
                :
                <p>{data.content.text}</p>
            }
            
        </div>
    )
}

export default UselessFact