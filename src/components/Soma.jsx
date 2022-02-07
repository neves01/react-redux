import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Soma(props) {
    const { min, max } = props.numeros;
    return (
        <Card title="Sum" blue>
            <span>
                <strong>Result: </strong>
                <strong>{min + max}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma);