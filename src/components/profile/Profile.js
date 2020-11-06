import React from 'react';
import './Profile.css'
import logo from './miLogo.png' 
export default function Profile(){

    return (
        <div className="root">
            <div className="upBar">
                <div className="links">
                    <a className="titleName" href="/">Tomás Maldonado</a>
                    <a href="/curriculum">Curriculum</a>
                    <a href="/info">Sobre mí</a>
                    <a href="/contacto">Contacto</a>
                </div>
            </div>
            <div className="information">
                    <img className="imgInicio" src={logo} alt="nothing"/>
                <div className="tips">
                    <div className="tip">
                        {/* <p>Nombre</p> */}
                        <span class="tiny material-icons" >arrow_right_alt</span>
                        <p>Tomás Agustín Maldonado Sarmiento</p>
                    </div>
                    <div className="tip">
                        {/* <p>Titulo</p> */}
                        <span class="tiny material-icons" >arrow_right_alt</span>
                        <p>Desarrollador web full stack</p>
                    </div>
                    <div className="tip">
                        <span class="tiny material-icons" >arrow_right_alt</span>
                    </div>
                    <div className="tip">
                        <span class="tiny material-icons" >arrow_right_alt</span>
                    </div>
                </div>
            </div>
        </div>
    )
}