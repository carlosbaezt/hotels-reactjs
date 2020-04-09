import Hero from '../Hero';
import React from 'react';
import Filters from '../Filters';

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
            }
        }
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
          </div>
        )
    }
}
export default App;