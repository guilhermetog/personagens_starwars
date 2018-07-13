import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './Personagem.css';

class Personagem extends Component {

    render() {
        const props = this.props
        return (
            <div className="card">
                <div className="card-header">
                        <h2>{props.name}</h2>
                        <h3>{props.gender}</h3>
                </div>
                <div className="card-body">
                    <ul>
                        <li><strong>Height:</strong> {props.height} </li>
                        <li><strong>Mass:</strong> {props.mass} </li>
                        <li><strong>Hair Color:</strong> {props.hair_color}</li>
                        <li><strong>Skin Color:</strong> {props.skin_color}</li>
                        <li><strong>Eye Color:</strong> {props.eye_color}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <ul>
                        <li><button className="btn btn-session inactive">Filmes</button></li>
                        <li><button className="btn btn-session inactive">Especies</button></li>
                        <li><button className="btn btn-session inactive">Veiculos</button></li>
                        <li><button className="btn btn-session inactive">Naves</button></li>
                    </ul>
                </div>  
            </div>
        );
    }
}

Personagem.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Personagem;
