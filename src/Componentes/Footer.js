import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        
        <footer>
            <div className='footer'>
                <div className='waves'>
                    <div className='wave' id='wave1'></div>
                    <div className='wave' id='wave2'></div>
                    <div className='wave' id='wave3'></div>
                    <div className='wave' id='wave4'></div>
                </div>
                <ul className='iconsFoot'>
                    <li><a href="https://www.facebook.com/HnosVazquezRefrigeracion"> <AiFillFacebook/> </a></li>
                    <li><a href="https://www.instagram.com/carefrigeracion/"> <AiFillInstagram/> </a></li>
                </ul>
                <ul className='menuFoot'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/nosotros'>Nosotros</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <p>© 2022 C&A Refrigeración. Todos los derechos reservados.</p>
                <p className='p'>By Seba Vazquez</p>
            </div>
        </footer>
        
    )
}

export default Footer