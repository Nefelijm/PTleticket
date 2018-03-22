import React from 'react'
import logo from '../logo-header.png'
import './header.css'

const Header = () => (
  <div className="header">
    <header>
      <img src={logo} />
      <div className="input-group mb-3 container-input">
        <input type="text" className="form-control" placeholder="Buscar evento" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary white" type="button">Buscar</button>
        </div>
      </div>
      <div className="btn-group btn-group-toggle container-toggle" data-toggle="buttons">
        <label className="btn btn-secondary btn-but">
          <input type="radio" name="options" id="option1" autocomplete="off" checked /> Inicia Sesión
        </label>
        <label className="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" /> Regístrate
        </label>
      </div>
    </header>
  </div>
)
export default Header