import {ACCEPT_CGU} from "../Actions/actionsType";

const initialState = {
    cguAccepted: false,
};

function acceptCgu(state = initialState, action) {
    let nextState;

    if (action.type === ACCEPT_CGU) {
        nextState = {
            ...state,
            cguAccepted: true
        };

        return nextState || state;
    }

    return  state;
}

export default acceptCgu;