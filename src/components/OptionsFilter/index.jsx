import React from 'react';

function OptionsFilter(props) {
    const {options, selected, icon} = props;

    const optionsToRender = options.map((option) =>
        <option key={option.name}
                value={option.value}
                selected={option.value === selected ? 'selected' : ''}>
            {option.name}
        </option>
    );
    
    return(
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } selected={selected}>
                        {optionsToRender}
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                </div>
            </div>
        </div>
    )
}

export default OptionsFilter;