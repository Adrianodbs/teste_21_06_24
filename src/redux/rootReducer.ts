import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({userReducer, cartReducer})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer