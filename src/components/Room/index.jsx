import React from 'react';

function Room(props) {
    return (
        <>
            <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
            <span className="tag is-medium">{props.rooms} Habitaciones</span>
        </>
    )
}

export default Room;