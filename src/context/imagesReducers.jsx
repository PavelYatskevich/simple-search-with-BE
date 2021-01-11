import {
    SET_SEARCH
} from './types';

export const initial = {
    search: ''
};

export const imagesReducer = (state, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
};
