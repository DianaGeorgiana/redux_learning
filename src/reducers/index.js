import { ADD_ITEM } from "../constants/action-types";
import {DEL_ITEM} from "../constants/action-types";

const initialState = {
    items: []
};

function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_ITEM:
            return {
                items: [payload, ...state.items]
            };
        case DEL_ITEM:

            return {
                items:[...state.items.slice(0,payload), ...state.items.slice(payload+1)]
            };

        default:
            return state;
    }
}

export default rootReducer;