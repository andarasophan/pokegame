/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMemo } from 'react'
import Field from './Field'
import Pokemon from './Pokemon'
import { gql, useQuery } from "@apollo/client";

const POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        id
        name
        image
      }
    }
  }
`
const limit = 20
const offset = 0

const Home = () => {
  const { loading, data: { pokemons: { results: items = [] } = {} } = {} } = useQuery(POKEMON_LIST, {
    variables: { limit, offset },
  })

  // bagi 4 pokemon untuk setiap field nya'
  const renderFieldByFourPokemon = useMemo(() => {
    let result = []
    let pokemons = []
    items.forEach((el, i) => {
      pokemons.push((
        <Pokemon
          key={`pokemon-${i}-${el.id}`}
          image={el.image}
          name={el.name}
          id={el.id}
        />
      ))
      if ((i + 1) % 4 === 0 || i === items.length - 1) {
        result.push((
          <Field key={`field-${Math.ceil((i + 1) / 4)}`}>
            {pokemons}
          </Field>
        ))
        pokemons = []
      }
    })
    return result
  }, [items])

  return (
    <div
      css={css`
        min-height: 100vh;
        overflow-y: hidden;
        display: flex;
      `}
    >
      {
        loading ?
          <p>loading</p>
          :
          renderFieldByFourPokemon
      }
    </div>
  );
}

export default Home
