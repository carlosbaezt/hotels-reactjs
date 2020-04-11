import React from 'react';
import DateFilter from '../DateFilter';
import OptionsFilter from '../OptionsFilter';

class Filters extends React.Component {

    constructor(props) {
        super(props)
        this.onDateChange = this.onDateChange.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    onDateChange(name, date) {
        let payload = this.props.filters;
        this.props.filters[name] = date;
        this.props.onFilterChange(payload);
    }

    onOptionChange(event) {
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value;
        this.props.onFilterChange(payload);
    }

    render() {        
        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                        name='dateFrom'
                        date={ this.props.filters.dateFrom}
                        icon="sign-in-alt" 
                        onDateChange={this.onDateChange}
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                        name='dateTo'
                        date={ this.props.filters.dateTo }
                        icon="sign-out-alt"
                        onDateChange={this.onDateChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='country'
                        options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                        selected={ this.props.filters.country }
                        icon="globe"
                        onOptionChange={this.onOptionChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='price'
                        options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected={ this.props.filters.price }
                        icon="dollar-sign"
                        onOptionChange={this.onOptionChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='rooms'
                        options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                        selected={ this.props.filters.rooms }
                        icon="bed"
                        onOptionChange={this.onOptionChange}
                    />
                </div>
            </nav>
        )
    }
}

export default Filters;