import React from 'react';
import Price from '../Price';
import DataTag from '../DataTag';

class Hotel extends React.Component {

    onBookEvent = (event) => {
        event.preventDefault();
        alert('Funcionalidad pendiente por implementar');
    }

    render() {
        const {slug, name, photo, description, rooms, city, country, price, availabilityFrom, availabilityTo} = this.props.data;
        const dateOptions = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
        const availabilityFromFormatted = new Date(availabilityFrom).toLocaleDateString("es-ES", dateOptions);
        const availabilityToFormatted = new Date(availabilityTo).toLocaleDateString("es-ES", dateOptions);
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={photo} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{name}</p>
                    <p>{description}</p>
                    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                        <div className="control">
                            <div className="tags has-addons">
                                <DataTag icon="map-marker" message={`${city}, ${country}`} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <DataTag icon="bed" message={`${rooms} Habitaciones`} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags">
                                <Price price={price} slug={slug} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags">
                                <DataTag icon="sign-in-alt" message={`${availabilityFromFormatted}`} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags">
                                <DataTag icon="sign-out-alt" message={`${availabilityToFormatted}`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="_blank" onClick={this.onBookEvent} className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        );
    }
}

export default Hotel;