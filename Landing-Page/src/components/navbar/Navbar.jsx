
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <ul>
            <li>
                
                <Link to={ROUTES.LOGIN}><label>авторизация</label></Link>
            </li>
            <li>
            <Link to={ROUTES.HOME}>  <label>конструктор-карт</label></Link>
          

            </li>
            <li>
            <Link to={ROUTES.PRODUCTS}> <label>карточка-товара</label></Link>
           

            </li>
            <li>
                <Link to={ROUTES.CARGALLERY}><label>карти</label></Link>
            </li>

        </ul>
    </div>

  )
}

export default Navbar