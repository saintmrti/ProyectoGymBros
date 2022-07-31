import SaveWidget from './SaveWidget'

const NavBar = () => {
  
  function openMenu() {
    let menu = document.getElementById('menu')

    menu.classList.contains('hidden') ? menu.classList.remove('hidden') : menu.classList.add('hidden')
  }

  return (
    <>
      <nav className='py-5 relative'>
        <div className='container mx-auto flex items-center px-8 xl:px-0 font-bold'>
          <h1 className='flex flex-grow text-2xl'><a href="">GymBros</a></h1>
          <div className='flex lg:hidden'>
            <button onClick={openMenu}><i id='iconNav' className='bi bi-list'></i></button>
          </div>
          <div id='menu' className='lg:flex hidden flex-grow justify-between items-center absolute lg:relative lg:top-0 top-20 w-full lg:w-auto left-0 p-7 lg:p-0'>
            <ul className='flex flex-col lg:flex-row'>
              <li className='mr-3 mb-5 lg:mb-0'>
                <a href="">Rutinas</a>
              </li>
              <li className='mr-3 mb-5 lg:mb-0'>
                <a href="">Recetas</a>
              </li>
              <li className='mb-5 lg:mb-0'>
                <a href="">Nosotros</a>
              </li>
              <li className='visible lg:invisible'>
                <a href="">Guardados</a>
              </li>
            </ul>
            <SaveWidget/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar