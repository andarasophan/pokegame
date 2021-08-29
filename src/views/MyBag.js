import React, { useContext } from 'react'
import Button from '../components/Button'
import { REMOVE_POKEMON } from '../store/actionTypes'
import { store } from '../store/store'

const MyBag = () => {
  const { state: { user: { pokemons: myPokemons = [] } = {} }, dispatch } = useContext(store)

  return (
    <div>
      <h1>MY BAG</h1>
      <ul>
        {
          myPokemons.map(el => (
            <li key={el.nickname}>
              {el.nickname}
              <Button variant="danger" onClick={() => {
                dispatch({ type: REMOVE_POKEMON, payload: el.nickname })
              }}>remove</Button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default MyBag
