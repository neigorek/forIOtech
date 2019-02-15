import React, {Component} from 'react';
import './list-item.css'

export default class ListItem extends Component {

    render() {


        let styling = {

            visibility: 'hidden',

        };

        let src = '';

        let st = {

            height: '100%',
            width: '100%',
            visibility: 'visible',

            backgroundColor: 'white'
        }

        const srcs = [

            '../img/1st.svg',
            '../img/2nd.svg',
            '../img/3rd.svg'

        ];


        const { name, count_pub, pageviews, f, w, id, term } = this.props;


        if (f.length === 0 && term.length === 0) {

            for (let i = 0, l = w.length; i < l; i++) {

                if (w[i].name === name) {

                    src = srcs[i];

                    styling.visibility = 'visible'

                }
            }
        }

        if (id % 2 === 0){
            st.backgroundColor = 'snow';
        }
        else {
            st.backgroundColor = 'lightblue'
        }


        return(
            <div style={st} className={'list-item'}>

                <span className={'col-1'}>{id}</span>
                <div  className={'shape'}><span>{name[0]}</span></div>
                <span className={'col-4'}>
                    <div>{name}</div>
                    <div>публ.{count_pub}</div>

                </span>

                <img style={styling} className={'col-2 medal'} src={src} alt={'img'} width='25px' height='25px'/>

                <span className={'col-4'}>{pageviews}</span>


            </div>
        )
    }

}