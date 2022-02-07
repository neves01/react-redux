import React from 'react';
import './Intervalo.css';
import Card from './Card';
import { connect } from 'react-redux';
import { setMaxNumber, setMinNumber } from '../store/actions/numeros';

function Intervalo(props) {
    const { min, max } = props.numeros;

    return (
        <Card title="Range of numbers" red>
            <div className="Intervalo">
                <strong>Min</strong>
                <input type="number" value={min} onChange={e => props.alterMin(+e.target.value)} />
                <strong>Max</strong>
                <input type="number" value={max} onChange={e => props.alterMax(+e.target.value)} />
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

function mapDispatchToProp(dispatch) {
    return {
        // will be included into props, props.alterMin(...)
        alterMin(newNumber) {
            // action creator -> action
            const action = setMinNumber(newNumber);
            dispatch(action);
        },
        alterMax(newNumber) {
            const action = setMaxNumber(newNumber);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);