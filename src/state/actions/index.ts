import { ActionType } from "../action-types/index"

interface SumAction {
    type: ActionType.SUM,
    payload: number
}
interface State {
    sum: number
}

export type Action = SumAction;
export type StateType = State;