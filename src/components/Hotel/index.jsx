import React from 'react';
import Price from '../Price';
import Location from '../Location';
import Room from '../Room';

class Hotel extends React.Component {
    render() {
        const {name, photo, description, rooms, city, country, price} = this.props.data;
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
                                <Location city={city} country={country} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <Room rooms={rooms} />
                            </div>
                        </div>
                        <div className="control">
                            <div className="tags">
                                <Price price={price} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                </div>
            </div>
        );
    }
}

export default Hotel;