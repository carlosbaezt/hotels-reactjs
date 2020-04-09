import React from 'react';

class OptionsFilter extends React.Component {

    constructor(props) {
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        this.props.onOptionChange(event)
    }

    render() {
        const {options, selected, icon, name} = this.props;
    
        const optionsToRender = options.map((option) =>
            <option key={option.name}
                    value={option.value === undefined ? '' : option.value}>
                {option.name}
            </option>
        );
        
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} }
                                defaultValue={selected}
                                name={ name }
                                onChange={ this.handleOptionChange }>
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
}

export default OptionsFilter;