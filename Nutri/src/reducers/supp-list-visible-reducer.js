import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
    switch (action.type) {
        case c.TOGGLE_SUP_LIST:
            return !state;
        default:
            return state;
    }
};