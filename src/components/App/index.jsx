import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';
import Hotels from '../Hotels';

class App extends React.Component {

    constructor(props) {
        super(props);
        const today = new Date();
        this.state = {    
            filters: {
                dateFrom: today, 
                dateTo: new Date(today.valueOf() + 86400000),
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
        return (
          <div>
            <Hero filters={ this.state.filters } />
            <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange } />
            <Hotels data={ this.state.hotels } loading={this.state.loadingHotels}/>
          </div>
        )
    }
}
export default App;