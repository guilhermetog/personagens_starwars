import React, { Component} from 'react';
import PropTypes from 'prop-types';
import * as Personagens from '../../apis/PersonagensAPI';

import './Dashboard.css';
import Personagem from '../../components/Personagem';

class Dashboard extends Component {
    constructor(){
        super()
        
        this.state = {
            next:"https://swapi.co/api/people/",
            chars_list:[]
        }
    }

    componentWillMount(){
        this.context.store.subscribe(()=>{
            this.setState({
                next: this.context.store.getState().characters.next,
                chars_list: this.context.store.getState().characters.lista
            })
            if(this.state.next){
                this.setState({next: this.state.next.toString()})
            }
        })
        
        Personagens.getPersonagens(this.state.next,(data)=>{
            this.context.store.dispatch({type:"CHAR_LIST_INCREMENT",data})
        });
    }

    carregarMais = () =>{
        Personagens.getPersonagens(this.state.next,(data)=>{
            this.context.store.dispatch({type:"CHAR_LIST_INCREMENT",data})
        });
    }

    render() {
        return (
            <div className="container">
                <div className="logo">
                    <div className="logo-img"></div>
                    <h1>Character List</h1>
                </div>
                <ul>
                    {this.state.chars_list.map(char=> 
                        <li  key={char.name}><Personagem {...char}></Personagem></li>
                    )}

                    <li>
                        <button className={`btn btn-more ${this.state.next?'':'inactive'}`} 
                                onClick={this.carregarMais}>Mais+</button>
                    </li>
                </ul>
            </div>
        );
    }
}

Dashboard.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Dashboard;
