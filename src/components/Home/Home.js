import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import "./style.css";

export default class Home extends Component {
    render() {
        return (
            <div id="jumbotronHome" className="jumbotron mt-4">
                    <h1>Sistema de Estoque</h1>
                    <p>
                        Segurança e confiabilidade é nosso Lema !!!
                    </p>
                    <p>
                        <Button variant="primary">Leia Mais</Button>
                    </p>
            </div>
        )
    }
}
