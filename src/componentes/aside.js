import React from 'react';
import  './aside.css';
import teatro from '../assets/images/teatro.jpg';
const Aside = () =>(
    <div className = "container-fluid">
       <div className="row">
          <div className="col-12 text-center">
             <h3>Teatro - Mucho ruido por nada - Corta temporada</h3>
             <img src={teatro}/> 
          </div>
      </div>
        <div className="row">
          <div className="col-12 text-center">
             <p className = 'aside'>En la época de Shakespeare las mujeres estaban prohibidas de actuar. Hoy, 14 hombres asumen el reto de ponerse en los zapatos de la mujer. A través de sus brillantes personajes, Shakespeare expone las complejidades del amor y nos recuerda la importancia de la comunidad sobre la vida en pareja.
               <br/>Autor: William Shakespeare
             </p>
          </div>
        </div>
    </div>
)

export default Aside