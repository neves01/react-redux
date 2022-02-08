import { createStore, combineReducers } from 'redux';
import numerosReducer from './reducers/numeros';

const reducers = combineReducers({
    numeros: numerosReducer
})

const store = createStore(reducers);

export { store };
