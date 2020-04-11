import React from 'react';
import DatePicker from 'react-date-picker';

class DateFilter extends React.Component {
    handleDateChange = (name, date)  => {
        this.props.onDateChange(name, date);
    }

    render() {
        const {date, icon, name} = this.props;
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <DatePicker
                        calendarIcon={null}
                        clearIcon={null}
                        className="input date-picker"
                        value={date}
                        name={ name }
                        onChange={ (date) => this.handleDateChange(name, date) }
                    />
                    <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DateFilter;