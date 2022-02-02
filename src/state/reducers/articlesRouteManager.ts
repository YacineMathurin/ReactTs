import { ActionType } from "../action-types/index"
import { Action, StateType } from "../actions"

const initialState = {
    sum: 0
};

const articlesRouteManager = (state: StateType = initialState, action: Action): StateType => {
    switch (action.type){
        case ActionType.SUM:
            return {
                ...state,
                sum: action.payload
            };
        default:
            return state
    }
}

export default articlesRouteManager;