import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import Header from './Header'

const routeWithHeader = [
  '/',
  '/detail'
]

const Layout = ({
  children
}) => {
  const { pathname } = useLocation()
  const firstPathname = useMemo(() => `/${pathname.split('/')[1]}`, [pathname])

  return (
    <main>
      {
        routeWithHeader.includes(firstPathname) &&
        <Header />
      }
      {children}
    </main>
  )
}

export default Layout
