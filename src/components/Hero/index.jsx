import React from 'react';

function Hero(props) {
    console.log(props);
    const { dateFrom, dateTo, country, price, rooms } = props.filters;
    const dateOptions = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
    return(
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        desde el <strong>{dateFrom.toLocaleDateString("es-ES", dateOptions)}</strong> hasta el <strong>{dateTo.toLocaleDateString("es-ES", dateOptions)}</strong>
                        {country !== '' && ` en ${country}` }  {price > 0 && `por $${price}` } {rooms > 0 && `de hasta ${rooms} habitaciones` }
                    </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;