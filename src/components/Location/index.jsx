import React from 'react';

function Location(props) {
    return (
        <>
            <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
            <span className="tag is-medium">{props.city}, {props.country}</span>
        </>
    )
}

export default Location;