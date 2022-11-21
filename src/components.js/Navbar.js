import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-2">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={'./assets/images/logo.png'} className="w-100" alt="image" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-1">
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/menu">MENU</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/story">OUR STORY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/hiking">HIKING</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/contact">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/title">TITLE</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="input-1" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

