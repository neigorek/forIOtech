import React, {Component} from 'react';
import ListItem from "../list-item";
import './list.css'

export default class List extends Component {

        render() {

            const {cont, filter, wich, term} = this.props;

            let id = 0;

            const elements = cont.map((item)=>{

                const {...items} = item.props.children;

                return (
                        <li key = {id++} className={'list-group-item'}>

                            <ListItem
                                id={id}
                                {...items}
                                f={filter}
                                w={wich}
                                term={term}/>
                        </li>


                )

            });

            return (
                <ul className={'list-group'}>
                    { elements }
                </ul>
            )
        }


}