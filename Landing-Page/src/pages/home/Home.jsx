import React from 'react'
import Cards from '../../components/Cards/Cards'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'

const Home = () => {
  return (
    <div>

      <Link to={ROUTES.CARGALLERY}>Галерея Car</Link>
   
        <Cards/>
    </div>
  )
}

export default Home