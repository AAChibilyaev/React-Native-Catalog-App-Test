const initialState = {
    test: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADED':
            return {
                test: 'dasd'
            }
        default:
            return state
    }

}

export default reducer
