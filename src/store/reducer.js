import { ADD_POKEMON, REMOVE_POKEMON, SET_CONTAINER_SCROLL_ELEMENT, SET_SCROLL_POSITION, SET_USER_NAME } from "./actionTypes"

export const reducer = (state, action) => {
  // handle if pokemons null or undefined
  const prevPokemon = state.user?.pokemons ? state.user.pokemons : []

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
      return {
        ...state,
        user: {
          ...state.user,
          pokemons: [...prevPokemon, action.payload]
        }
      }
    case REMOVE_POKEMON:
      return {
        ...state,
        user: {
          ...state.user,
          pokemons: prevPokemon.filter(el => el.nickname !== action.payload)
        }
      }
    case SET_CONTAINER_SCROLL_ELEMENT:
      return {
        ...state,
        scroll: {
          ...state.scroll,
          containerElement: action.payload
        }
      }
    case SET_SCROLL_POSITION:
      return {
        ...state,
        scroll: {
          ...state.scroll,
          position: action.payload
        }
      }
    default:
      throw new Error()
  }
}
