import React from 'react';

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
        const dateFormatted = this.formatDate(date);
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

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
}


export default DateFilter;