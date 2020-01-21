import { ADD_ITEM } from "../constants/action-types";

import {DEL_ITEM} from "../constants/action-types";

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
};

export const delItem = (payload) => {
    return {
        type: DEL_ITEM,
        payload
    }
};
