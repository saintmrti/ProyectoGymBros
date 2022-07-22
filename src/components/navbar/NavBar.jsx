import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='container mx-auto flex'>
          <h1>GymBros</h1>
          <ul className='flex'>
            <li>
              <a href="">Rutinas</a>
            </li>
            <li>
              <a href="">Recetas</a>
            </li>
            <li>
              <a href="">Nosotros</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar