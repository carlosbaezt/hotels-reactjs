import React from 'react';

function DataTag(props) {
    return (
        <>
            <span className="tag is-medium is-info"><i className={`fas fa-${props.icon}`}></i></span>
            <span className="tag is-medium">{props.message}</span>
        </>
    )
}

export default DataTag;