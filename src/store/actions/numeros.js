// Action Creator
export function setMinNumber(newNumber) {
    return {
        type: 'ALTER_MIN_NUMBER',
        payload: newNumber
    }
}

export function setMaxNumber(newNumber) {
    return {
        type: 'ALTER_MAX_NUMBER',
        payload: newNumber
    }
}