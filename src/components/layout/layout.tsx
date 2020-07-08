import React, { useState, useEffect } from 'react'
import Header from '../header'
import './layout.css'

const Layout: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>

    </>
  )
}

export default Layout

