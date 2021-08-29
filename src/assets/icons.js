import React from 'react'

export const Spinner = ({ size = 24, className }) => (
  <svg
    className={className}
    viewBox="22 22 44 44"
    width={size}
    height={size}
  >
    <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" stroke="currentColor" />
  </svg>
)

export const PencilIcon = ({ size = 24, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <path d="M0 0H24V24H0z"></path>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M8 17.915V5.967a1.5 1.5 0 01.45-1.071l2.516-2.467a1.5 1.5 0 012.084-.016l2.484 2.363A1.5 1.5 0 0116 5.863v12.052a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5z"
        transform="rotate(-135 12 10.707)"
      ></path>
      <rect
        width="15"
        height="2"
        x="5"
        y="20"
        fill="currentColor"
        opacity="0.3"
        rx="1"
      ></rect>
    </g>
  </svg>
)

export const PokeballIcon = ({ size = 24, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 121 121"
    fill="currentColor"
  >
    <path
      d="M410 1150v-50H210v-100H110V800H10V400h100V200h100V100h200V0h400v100h200v100h100v200h100v400h-100v200h-100v100H810v100H410v-50zm300-250V800H510v200h200V900zM310 550v-50h600v100h200V400h-100V200H810V100H410v100H210v200H110v200h200v-50z"
      transform="matrix(.1 0 0 -.1 0 121)"
    ></path>
  </svg>
)
