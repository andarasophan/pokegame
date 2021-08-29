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
