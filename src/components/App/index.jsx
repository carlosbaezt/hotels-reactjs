import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';
import Hotels from '../Hotels';
import 'bulma/css/bulma.css';

class App extends React.Component {

    API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

    constructor(props) {
        super(props);
        const today = new Date();
        this.state = {
            filters: {
                dateFrom: today,
                //adding 1 month since today
                dateTo: new Date(today.valueOf() + 2592000000),
                country: undefined,
                price: undefined,
                rooms: undefined
            },
            hotels: [],
            hotelsLoaded: false
        }
    }

    componentDidMount() {
        this.getHotels();
    }

    getHotels() {
        return fetch(this.API_URL)
            .then((response) => response.json())
            .then((hotels) => {
                //Set timeout to watch progress bar animation
                setTimeout(() => {
                    this.setState({
                        hotels: hotels,
                        hotelsLoaded: true
                    })
                }, 1000)
            })
            .catch(() => alert('Error en la petición...'));
    }

    handleFilterChange = (filters) => {
        this.setState({
            filters: filters
        })
    }

    render() {
        const { hotels, filters, hotelsLoaded } = this.state;
        const hotelsFiltered = this.filterHotels(hotels, filters);
        return (
            <div>
                <Hero filters={filters} amountOfHotels={hotelsFiltered.length} />
                <Filters filters={filters} onFilterChange={this.handleFilterChange} />
                <Hotels data={hotelsFiltered} hotelsLoaded={hotelsLoaded} />
            </div>
        )
    }

    filterHotels(hotels, filters) {
        const { dateFrom, dateTo, country, price, rooms } = filters;

        //Setting start and end of the day to get all the possible results
        dateFrom.setHours(0, 0, 0);
        dateTo.setHours(23, 59, 59);

        const dateFromInMiliseconds = dateFrom.getTime();
        const dateToinMilisecods = dateTo.getTime();

        return hotels.filter((hotel) => {
            if (hotel.availabilityFrom < dateFromInMiliseconds || hotel.availabilityTo > dateToinMilisecods) {
                return false;
            }

            if ((country !== undefined && country !== '') && country !== hotel.country) {
                return false;
            }

            if ((price !== undefined && price !== '') && parseInt(price) !== hotel.price) {
                return false;
            }

            if ((rooms !== undefined && rooms !== '') && parseInt(rooms) < hotel.rooms) {
                return false;
            }

            return true;
        });
    }
}
export default App;