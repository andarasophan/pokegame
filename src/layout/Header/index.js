/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"
import { useContext } from "react"
import Button from "../../components/Button"
import { SET_SCROLL_POSITION } from "../../store/actionTypes"
import { store } from "../../store/store"
import { toAbsoluteUrl } from "../../utils/helpers/assetHelpers"
import PlayerName from "./PlayerName"

const Header = () => {
  const theme = useTheme()
  const { state: { user, scroll: { containerElement } }, dispatch } = useContext(store)

  // set scroll position when click my bag
  const savePosition = () => {
    dispatch({ type: SET_SCROLL_POSITION, payload: containerElement?.current?.scrollLeft })
  }

  return (
    <div css={css`
      position: fixed;
      top: 1rem;
      right: 0;
      background-color: rgba(0,0,0,.4);
      padding: 2rem;
      padding-left: 4rem;
      color: white;
      clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);
      z-index: 2;
    `}>
      <div css={css`
        display: flex;
        align-items: center;
        margin-bottom: 1.6rem;
        img {
          width: 3.6rem;
          height: 3.6rem;
          margin-right: 1rem;
          flex-shrink: 0;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}
      >
        <img
          src={toAbsoluteUrl('/assets/pokeball-colorless.png')}
          alt=""
        />
        <div>
          <PlayerName />
          <p css={{ fontSize: 10, height: 16 }}>Pokemon owned: <span css={{ color: theme.colors.secondary }}>{user?.pokemons?.length ?? 0}</span></p>
        </div>
      </div>
      <Button
        href='/my-bag'
        variant="secondary"
        css={css`
          font-size: 1rem;
          width: 100%;
          text-shadow: 2px 2px 0 ${theme.colors.gray};
        `}
        onClick={savePosition}
      >
        MY BAG
      </Button>
    </div>
  )
}

export default Header
