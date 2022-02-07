import './Intervalo.css';
import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Media(props) {
    console.log(props.numeros);
    const { min, max } = props.numeros;
    return (
        <Card title="AVG" green>
            <span>
                <strong>Result: </strong>
                <strong>{(min + max) / 2}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Media);