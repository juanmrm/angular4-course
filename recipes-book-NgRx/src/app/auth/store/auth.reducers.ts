

export interface State {
    token: string;
    authenticated: boolean;
}

// The initial state
const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action) {
    return state;
}
