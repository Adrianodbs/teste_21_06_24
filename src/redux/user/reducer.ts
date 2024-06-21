import userActionTypes from "./actionTypes";

interface ActionProps {
  type: string;
  payload?: string;
}

interface UserStateProps {
  currentUser: number | null;
}

const initialState: UserStateProps={
  currentUser: null
}

const userReducer = (state = initialState, action: ActionProps) =>{
  switch (action.type){
    case userActionTypes.LOGIN:
      return {...state, currentUser: action.payload}
    case userActionTypes.LOGOUT:
      return {...state, currentUser: null}
    default:
      return state
  }
}

export default userReducer