import { gql } from "@apollo/client";

export const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      next
      results {
        name
        image
      }
    }
  }
`

export const POKEMON_DETAIL = gql`
  query pokemon($pokemonName: String!) {
    pokemon(name: $pokemonName) {
      name
      sprites {
        front_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          id
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`
