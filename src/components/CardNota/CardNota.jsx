import React, { Component } from 'react';
import { ReactComponent as DeleteSvg } from '../../assets/svg/ico-delete.svg';
import "./estilo.css";

class CardNota extends Component {
    
    apagar(){
        this.props.deletarNota(this.props.idx);
    }


    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSvg onClick={this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.nota}</p>
            </section>
        );
    }
}

export default CardNota;