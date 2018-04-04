import React from 'react';
import  './aside.css';
import teatro from '../assets/images/teatro.jpg';
const Aside = () =>(
    <div className = "container-fluid">
       <div className="row">
          <div className="text-center">
             <h5 className="title">Teatro - Mucho ruido por nada - Corta temporada</h5> 
          </div>
      </div>
        <div className="row">
          <div className="col-7">
             <img src={teatro}/> 
          </div>
          <div  className="col-5">
          <p className = "aside">En la época de Shakespeare las mujeres estaban prohibidas de actuar. Hoy, 14 hombres asumen el reto de ponerse en los zapatos de la mujer. A través de sus brillantes personajes, Shakespeare expone las complejidades del amor y nos recuerda la importancia de la comunidad sobre la vida en pareja.
            <br/>Autor: William Shakespeare
          </p>
          </div>
        </div>
        <div>
          <div className="row seat">
           <p>Elige tu asiento en La zona que mas prefieras!!!!</p>
          </div>
         <div className="row ley">
            <div className="text-center">
              <h1 className="title-ley">LEYENDA</h1> 
            </div>
            <div className="col-6">
                <div>
                  <div><span className="Disponibles">Elig</span>DISPONIBLES</div>
                  <div><span className="Ocupados">Elig</span>OCUPADOS</div>
                </div>
            </div>
            <div  className="col-6">
                <div>
                  <div><span className="pla1">Eligeee</span>PLATEA VIP</div>
                  <div><span className="pla2">Eligeee</span>PLATEA</div>
                  <div><span className="pla3">Eligeee</span>PLATEA POSTERIOR</div>
                </div>           
            </div>
         </div>
        </div>
    </div>
)

export default Aside