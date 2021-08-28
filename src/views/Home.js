/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMemo } from 'react'
import Field from '../components/Field'
import Pokemon from '../components/Pokemon'

const pokemonDummyImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
const item = Array.from(Array(25).keys())

const Home = () => {
  // bagi 4 pokemon untuk setiap field nya
  const renderFieldByFourPokemon = useMemo(() => {
    let result = []
    let pokemons = []
    item.forEach((el, i) => {
      pokemons.push((
        <Pokemon
          key={`pokemon-${i}`}
          image={pokemonDummyImage}
          name='Charmeleon'
        />
      ))
      if ((i + 1) % 4 === 0 || i === item.length - 1) {
        result.push((
          <Field key={`field-${Math.ceil((i + 1) / 4)}`}>
            {pokemons}
          </Field>
        ))
        pokemons = []
      }
    })
    return result
  }, [])

  return (
    <div
      css={css`
        min-height: 100vh;
        overflow-y: hidden;
        display: flex;
      `}
    >
      {renderFieldByFourPokemon}
    </div>
  );
}

export default Home
