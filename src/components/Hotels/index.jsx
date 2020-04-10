import React from 'react';
import Hotel from '../Hotel';

class Hotels extends React.Component {
    render() {
        return(
        <section className="section" style={ {marginTop: '3em'} }>
            <div className="container">
                <div className="columns is-multiline">
                { this.props.loading ? (
                    <progress className="progress is-large is-info" max="100"></progress>
                ) : (
                    this.props.data.length ===  0 ? 
                    (
                        <article className="message is-warning">
                            <div className="message-body">
                                No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                            </div>
                        </article>
                    ) : (
                        this.props.data.map((hotel) => (
                            <div key={hotel.slug} className="column is-one-third">
                                <Hotel data={ hotel } />
                            </div>
                        ))
                    ))
                }
                </div>
            </div>
        </section>
        )
    }
}

export default Hotels;