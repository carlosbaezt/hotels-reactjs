import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';
import Hotels from '../Hotels';
import 'bulma/css/bulma.css';
import moment from 'moment';

class App extends React.Component {

    API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

    constructor(props) {
        super(props);
        this.state = {
            filters: {
                dateFrom: moment().toDate(),
                dateTo: moment().add(1, "month").toDate(),
                country: '',
                price: '',
                rooms: ''
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

        return hotels.filter((hotel) => {
            return  hotel.availabilityFrom >= dateFrom.getTime() &&
                    hotel.availabilityTo <= dateTo.getTime() &&
                    (country === '' || country === hotel.country) &&
                    (price === '' || parseInt(price) === hotel.price) &&
                    (rooms === '' ||  hotel.rooms <= parseInt(rooms))
        });
    }
}
export default App;