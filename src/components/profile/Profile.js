import React from 'react';
import './Profile.css'
import logo from './miLogo.png' 

export default function Profile(){

    return (
        <div className="root">
            <div className="upBar">
                <div className="links">
                    <a href="/">Inicio</a>
                    <a href="/curriculum">Curriculum</a>
                    <a href="/info">Sobre mí</a>
                    <a href="/contacto">Contacto</a>
                </div>
            </div>
            <div className="presentation">
                <span className="saludo">
                    <h2 className="titleName">Tomás Agustin</h2>
                    <h2 className="titleName">Maldonado Sarmiento</h2>
                </span>
                <span className="identity">
                    <img id="imgInicio" className="imgInicio" src={logo} alt="nothing"/>
                    <span className="conoceme">
                        <h4 >Este es mi Hola mundo</h4>
                        <h4 >¿Te gustaria conocerme un poco ?</h4>
                    </span>
                </span>
            </div>
            <div className="information">
                <div className="tips">
                    <span className="tip">
                        <p>Titulo</p>
                        <span class="tiny material-icons" >arrow_right_alt</span>
                        <p>Desarrollador web full stack</p>
                    </span>
                    <span className="tip">
                        <span class="tiny material-icons" >arrow_right_alt</span>
                        <p>Desarrollador web full stack</p>
                    </span>
                    <span className="tip">
                        <span class="tiny material-icons" >arrow_right_alt</span>
                    </span>
                    <span className="tip">
                        <span class="tiny material-icons" >arrow_right_alt</span>
                    </span>
                </div>
            </div>
        </div>
    )
}