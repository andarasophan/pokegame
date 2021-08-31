/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import StatusEnum from "../../utils/enums/statusEnum"

const StatusInfo = ({ className, stats = [] }) => (
  <div className={className}>
    {
      stats.map(el => (
        <div
          key={el.stat.name}
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <p css={{ textTransform: 'uppercase' }}>{StatusEnum.getAbr(el.stat.name)}</p>
          <p>{el.base_stat}</p>
        </div>
      ))
    }
  </div>
)

export default StatusInfo
