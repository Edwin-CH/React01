
import React from 'react'

const C01navbar = () => {
      return (
            <div>
                 <nav className="row bg-primary">
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Nismo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sucursales</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            De calle
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Nissan Skyline R32</a></li>
            <li><a className="dropdown-item" href="#">Nissan Skyline R33</a></li>
            <li><a className="dropdown-item" href="#">Nissan Skyline R34</a></li>
            <li><a className="dropdown-item" href="#">Nissan Silvia K-aeros</a></li>
            <li><a className="dropdown-item" href="#">Nissan GTR</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Ediciones especiales</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            De Competicion
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Nissan R32 Calsonic Skyline</a></li>
            <li><a className="dropdown-item" href="#">Nissan Skyline R33 Touring Edition</a></li>
            <li><a className="dropdown-item" href="#">Nissan Skyline R34 nür II</a></li>
            <li><a className="dropdown-item" href="#">Nissan Silvia K-aeros Spec II</a></li>
            <li><a className="dropdown-item" href="#">Nissan GT3 Yokohama Build</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Ediciones de Le mans</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Taller</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tienda de piezas</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    </nav>  
            </div>
      )
}

export default C01navbar
