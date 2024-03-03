import { INTERACTION } from "../actions/actions";

const historyReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case INTERACTION:
            return { ...state, searchHistory: [...(state.searchHistory || []), payload] };
        default:
            return state;
    }
};

const history = {
    searchHistory: []
};

export { historyReducer, history };
