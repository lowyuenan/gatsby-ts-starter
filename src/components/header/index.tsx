import React from 'react'
import headerStyle from './header.module.scss'
import { Link } from 'gatsby'

interface Props {}

const Header: React.FC<Props> = () => (
  <header className={headerStyle.header}>
    <nav>
      <ul>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
