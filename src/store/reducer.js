import { ADD_POKEMON, SET_USER_NAME } from "./actionTypes"

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
    case ADD_POKEMON:
      const prev = state.user?.pokemons ? state.user.pokemons : []
      return {
        ...state,
        user: {
          ...state.user,
          pokemons: [...prev, action.payload]
        }
      }
    default:
      throw new Error()
  }
}
