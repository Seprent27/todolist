import '../navBar/NavBar.css'
import { Link } from 'react-router-dom'


export default function navBar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link className='navLink' to={'/'}>ГЛАВНАЯ</Link></li>
        <li><Link className='navLink' to={'/todolist'}>ЗАДАЧИ</Link></li>
        <li><Link className='navLink' to={'/contact'}>КОНТАКТЫ</Link></li>
      </ul>
    </nav>
  )
}
