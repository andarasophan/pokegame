import React from 'react'

// for icons
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
