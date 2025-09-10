import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode} sticky-top` }>
      <div className="container-fluid">
         <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.tittle}</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>

            </li>
            <li className="nav-item">
         <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">About</Link>

            </li>
          </ul>
          <div className="form-check form-switch text-light">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlForfor="switchCheckDefault"> </label>
          </div>
         
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  tittle: PropTypes.string
}


Navbar.defaultProps = {
  tittle: "My App"
}
