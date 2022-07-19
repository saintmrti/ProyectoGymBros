import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <a href="#" className="navbar-brand px-4 px-lg-5">
            <h1 className="h2 m-0">SmartFit</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Rutinas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Recetas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Guardados <i className="bi bi-bookmark"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar