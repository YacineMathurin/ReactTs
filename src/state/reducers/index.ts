import { combineReducers } from "redux";
import articlesRouteManager from "./articlesRouteManager"


const reducers = combineReducers({
    articles: articlesRouteManager
})

export default reducers

export type RootState = ReturnType<typeof reducers>