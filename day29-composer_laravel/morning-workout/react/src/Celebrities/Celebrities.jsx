import React, {useState, useEffect} from 'react';
import Celebrity from '../Celebrity/Celebrity.jsx';

export default function Celebrities( props ) {
    const [loading, setLoading] = useState( false );
    const [data, setData] = useState( [] );

    useEffect( () => {
        // the code here will be executed once at the mount of component
        loadData();
    }, [] );

    const loadData = () => {
        if ( props.url ) {
            setLoading( true );

            fetch( props.url )
                .then( response => response.json() )
                .then( data => {
                    setData( data )
                } )
                .finally( () => {
                    setLoading( false )
                } );
        }
    }

    if ( loading ) {
        return (
            <div className="celebrities">
                <div className="message">Loading...</div>
            </div>
        )
    }

    return (
        <div className="celebrities">
            <h1>The highest-paid celebrities 2019</h1>
            {
                data.map( item => (
                    <Celebrity key={item.name} {...item} />
                ) )
            }
        </div>
    );
}