import React from 'react';
import moment from 'moment';

class DateFilter extends React.Component {
    constructor(props) {
        super(props)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(event) {
        this.props.onDateChange(event)
    }

    render() {
        const {date, icon, name} = this.props;
        const dateFormatted = moment(date).format('YYYY-MM-DD');
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input"
                           type="date"
                           value={dateFormatted}
                           name={ name }
                           onChange={ this.handleDateChange } />
                    <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DateFilter;