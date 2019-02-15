import React, {Component} from 'react';

export default class Filter extends Component{

    buttons = [
        {name: 'count_pub', label: 'count'},
        {name: 'pageviews', label: 'page'},
        {name: 'name', label:'name'}
    ];

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label})=>{

            const isActive = filter === name;

            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return(
                <button className = {`btn ${clazz}`}
                        type = "button"
                        key={name}
                        onClick={()=> onFilterChange(name)}>{label}</button>
            );

        });

        return (

            <div className = "input-group-append" id = "button-addon4">
                {buttons}
            </div>
        );
    };

}