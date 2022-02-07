const initialState = {
    min: 1,
    max: 10
}
export default function _(state = initialState, action) {
    switch (action.type) {
        case 'ALTER_MIN_NUMBER':
            return {
                ...state,
                min: action.payload
            }
        case 'ALTER_MAX_NUMBER':
            return {
                ...state,
                max: action.payload
            }
        default:
            return state;
    }
}