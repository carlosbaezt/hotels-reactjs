import React from 'react';
import Hotel from '../Hotel';

class Hotels extends React.Component {
    render() {
        return(
        <section className="section" style={ {marginTop: '2em'} }>
            <div className="container">
                <div className="columns is-multiline">
                {
                    this.props.hotelsLoaded ? (
                        this.props.data.length ===  0 ? ( this.noResults() ) :
                        (
                            this.props.data.map((hotel) => (
                                <div key={hotel.slug} className="column is-one-third">
                                    <Hotel data={ hotel } />
                                </div>
                            ))
                        )
                    ) : ( this.progressBar() )                    
                }
                </div>
            </div>
        </section>
        )
    }

    progressBar() {
        return(<progress className="progress is-large is-info" max="100"></progress>);
    }

    noResults() {
        return(
            <article className="message is-warning" style={ { width: '100%' } }>
                <div className="message-body">
                    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                </div>
            </article>
        );
    }
}

export default Hotels;