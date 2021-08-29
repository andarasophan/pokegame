/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { toAbsoluteUrl } from "../../utils/helpers/assetHelpers"

const Grass = () => (
  <img
    css={css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `}
    src={toAbsoluteUrl('/assets/OpenGrass.webp')}
    alt="Grass"
  />
)

export default Grass
