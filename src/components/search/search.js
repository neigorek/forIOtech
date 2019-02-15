import React, {Component} from 'react';

export default class Search extends Component{

    state = {
        term : ''
    }

    onSearchChange = (e) => {

        const term = e.target.value;

        this.setState({ term });

        this.props.onSearchChange(term);

    }

    render() {


        return (
            <input  className={'input-group'}
                    type={'text'}
                    placeholder={'searching...'}
                    value = {this.state.term}
                    onChange = {this.onSearchChange}
            />
        )
    }

}