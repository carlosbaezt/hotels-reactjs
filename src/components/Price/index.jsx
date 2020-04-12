import React from 'react';

function Price(props) {
    const dollarsIcons = [];
    for (let i = 1; i <= 4; i++) {
        if(i <= props.price) {
            dollarsIcons.push(<i key={`${props.slug}-price-${i}`} className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>);
        } else {
            dollarsIcons.push(<i key={`${props.slug}-price-${i}`} className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>);
        }
    }

    return (
        <span className="tag is-medium is-info">
            {dollarsIcons}
        </span>
    )
}

export default Price;