import React from 'react';

function DateFilter(props) {
    const {date, icon} = props;
    const dateFormatted = formatDate(date);
    return(
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" value={dateFormatted} />
                <span className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
    )
}

function formatDate(date) {
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

export default DateFilter;