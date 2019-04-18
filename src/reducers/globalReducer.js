const initialState = {
    cguAccepted: false,
};

function acceptCGU(state = initialState, action) {
    console.log(state);
    let nextState;
    switch (action.type) {
        case 'ACCEPT_CGU':
            if(!state.cguAccepted) {
                nextState = {
                    ...state,
                    cguAccepted: true
                }
            }
            return nextState || state;
        default:
            return state;
    }
}

export default acceptCGU