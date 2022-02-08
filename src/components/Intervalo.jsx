import React from 'react';
import './Intervalo.css';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxNumber, setMinNumber } from '../store/actions/numeros';

function Intervalo() {
    const { min, max } = useSelector(state => state.numeros)
    const dispatch = useDispatch();
    const onChangeMin = (value) => dispatch(setMinNumber(+value.target.value));
    const onChangeMax = (value) => dispatch(setMaxNumber(+value.target.value));

    //const { min, max } = props.numeros;

    return (


        <Card title="Range of numbers" red>
            <div className="Intervalo">
                <strong>Min</strong>
                <input type="number" value={min} onChange={onChangeMin} />
                <strong>Max</strong>
                <input type="number" value={max} onChange={onChangeMax} />
            </div>
        </Card>
    )
}

export default Intervalo;