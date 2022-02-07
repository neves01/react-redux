import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Sorteio(props) {

    const { min, max } = props.numeros;
    const random = parseInt(Math.random() * (max - min) + min)

    return (
        <Card title="Lucky number" purple>
            <span>
                <strong>Result: </strong>
                <strong>{random}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio);