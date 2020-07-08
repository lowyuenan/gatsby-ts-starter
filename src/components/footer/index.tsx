import React from 'react'
import s from './footer.module.scss'
import { Link } from 'gatsby'

interface Props {

}

const Footer: React.FC<Props> = () => (
  <footer className={s.footer}>
    <nav>
      <ul>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
