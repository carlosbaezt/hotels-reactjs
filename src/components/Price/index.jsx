import React from 'react';

function Price(props) {
    const dollars = [];
    for (let i = 1; i <= 4; i++) {
        if(i <= props.price) {
            dollars.push(<i key={`${props.slug}-price-${i}`} className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>);
        } else {
            dollars.push(<i key={`${props.slug}-price-${i}`} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>);
        }
    }

    return (
        <span className="tag is-medium is-info">
            {dollars}
        </span>
    )
}

export default Price;