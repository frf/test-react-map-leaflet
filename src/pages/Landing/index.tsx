import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { faMapSigns } from '@fortawesome/free-solid-svg-icons'
import LandingLogo from '../../assets/images/maps.png'

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h2>Sua plataforma de mapas <FontAwesomeIcon icon={faMapMarked} /></h2>
                </div>

                <img 
                    src={LandingLogo}
                    alt="Plataforma de Mapas"
                    className="hero-image"
                />


                <div className="buttons-container">
                    <Link to="/map" className="study">
                        <FontAwesomeIcon icon={faMapSigns} /> Visulizar Mapa
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;