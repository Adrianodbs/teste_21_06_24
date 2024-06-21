import userActionTypes from "./actionTypes"

interface UserPayloadProps {
  id?: number;
  name: string;
}

export const login = (payload:UserPayloadProps) => {
  return {
    type: userActionTypes.LOGIN,
    payload
  }
}

export const logout = () => {
  return {
    type: userActionTypes.LOGOUT,
  }
}