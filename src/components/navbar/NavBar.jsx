import React from 'react'

const Navbar = () => {

  function openMenu() {
    let menu = document.getElementById('menu')

    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
  }

  return (
    <>
      <nav className='navbar py-6 relative'>
        <div className='container mx-auto flex items-center px-8 xl:px-0 font-bold'>
          <h1 className='flex flex-grow'><a href="">GymBros</a></h1>
          <div className='flex lg:hidden'>
            <button onClick={openMenu}><i className='bi bi-list' style={{fontSize: 25}}></i></button>
          </div>
          <div id='menu' className='lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20'>
            <ul className='flex'>
              <li className='mr-7'>
                <a href="">Rutinas</a>
              </li>
              <li className='mr-7'>
                <a href="">Recetas</a>
              </li>
              <li>
                <a href="">Nosotros</a>
              </li>
              <li className='visible lg:invisible ml-7'>
                <a href="">Guardados</a>
              </li>
            </ul>
            <button className='lg:flex hidden'>
              <a href=""><i className='bi bi-bookmark' style={{fontSize: 20}}></i></a>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar