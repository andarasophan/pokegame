import { SET_USER_NAME } from "./actionTypes"

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      }
    default:
      throw new Error()
  }
}
