import React from 'react';
import DateFilter from '../DateFilter';
import OptionsFilter from '../OptionsFilter';

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(name, value) {
        const { filters, onFilterChange } = this.props;
        filters[name] = value;
        onFilterChange(filters);
    }

    render() {        
        return(
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                        name='dateFrom'
                        date={ this.props.filters.dateFrom}
                        icon="sign-in-alt" 
                        onChange={this.onFilterChange}
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                        name='dateTo'
                        date={ this.props.filters.dateTo }
                        icon="sign-out-alt"
                        onChange={this.onFilterChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='country'
                        options={ [ {value: '', name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                        selected={ this.props.filters.country }
                        icon="globe"
                        onChange={this.onFilterChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='price'
                        options={ [ {value: '', name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                        selected={ this.props.filters.price }
                        icon="dollar-sign"
                        onChange={this.onFilterChange}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        name='rooms'
                        options={ [ {value: '', name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 50, name: 'Hotel grande'} ] }
                        selected={ this.props.filters.rooms }
                        icon="bed"
                        onChange={this.onFilterChange}
                    />
                </div>
            </nav>
        )
    }
}

export default Filters;