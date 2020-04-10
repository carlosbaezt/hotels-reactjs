import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';
import Hotels from '../Hotels';

class App extends React.Component {

    constructor(props) {
        super(props);
        const today = new Date();
        today.setHours(0,0,0,0);
        this.state = {
            filters: {
                dateFrom: today, 
                dateTo: new Date(today.valueOf() + 8640000000),
                country: undefined,
                price: undefined,
                rooms: undefined
            },
            hotels: [],
            loadingHotels: true
        }
    }
    
    componentDidMount() {
      this.setState({
        loadingHotels: true
      })
      fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then((response) => response.json())
        .then((hotels) => {
          setTimeout(() => { this.setState({
            hotels: hotels,
            loadingHotels: false
          })}, 1000)
        });
    }

    handleFilterChange = (filters) => {
        this.setState({
          filters: filters
        })
    }

    render() {
        const {hotels, filters} = this.state;
        const hotelsFiltered = this.filterHotels(hotels,filters);
        return (
          <div>
            <Hero filters={ filters } />
            <Filters filters={ filters } onFilterChange={ this.handleFilterChange } />
            <Hotels data={ hotelsFiltered } loading={ this.state.loadingHotels }/>
          </div>
        )
    }

    filterHotels(hotels, filters) {
      const dateFrom = filters.dateFrom.getTime();
      const dateTo = filters.dateTo.getTime();
      console.log(filters);
      return hotels.filter((hotel) => {
        
        if(hotel.availabilityFrom < dateFrom || hotel.availabilityTo > dateTo) {
          return false;
        }
        
        if((filters.country !== undefined && filters.country !== '') && filters.country !== hotel.country) {
          return false;
        }

        if((filters.price !== undefined && filters.price !== '') && parseInt(filters.price) !== hotel.price) {
          return false;
        }

        if((filters.rooms !== undefined && filters.rooms !== '') && parseInt(filters.rooms) < hotel.rooms) {
          return false;
        }

        return true;
      });
    }



}
export default App;