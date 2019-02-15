import React, {Component}from 'react';

import Search from '../search';
import Filter from '../filter'
import List from '../list';
import './app.css'


export default class App extends Component{

    Data = require('../../data');

    state = {

        d: this.Data,
        term: '',
        filter: '',
        currentPage: 1,
        dPerPage: 10,

    };

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    onSearchChange = (term) => {

        this.setState({term});

    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }


    filter(items, filter) {

        switch (filter) {

            case 'name' :
                return items.sort((a, b) => a['name'].localeCompare(b['name']));

            case 'count_pub':
                return items.sort((a, b) => b['count_pub'] - a['count_pub']);

            case 'pageviews':
                return items.sort((a, b) => b['pageviews'] - a['pageviews']);

            default :
                return items;

        }

    }

    whichWin(items){

        return items.sort((a,b)=> b - a).slice(0,3)

    }


    search(items, term){
        if (term.length === 0){

            return items;
        }

        return items.filter((item) => {

            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;

        })
    }


    render() {

        this.handleClick = this.handleClick.bind(this)

        const { d, term, filter, currentPage, dPerPage} = this.state;

        const ItemsVisible = this.filter(this.search(d, term), filter);

        const win = this.whichWin(ItemsVisible);

        const indexOfLastTodo = currentPage * dPerPage;
        const indexOfFirstTodo = indexOfLastTodo - dPerPage;
        const currentTodos = ItemsVisible.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(ItemsVisible.length / dPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className={'btn btn-outline-info'}
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });


        return(
            <div className={'container'}>

                <div className={'d-flex'}>
                    <Search onSearchChange = { this.onSearchChange }/>
                    <Filter
                            filter={filter}
                            onFilterChange={ this.onFilterChange }/>
                </div>

                <List
                    cont={renderTodos}
                    wich={win}
                    filter={filter}
                    term = {term}/>

                <div>
                    <ul className={'pagination pagination-lg'}>
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        )
    }

}