import React from 'react'
import { BsArrowDown} from "react-icons/bs";
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoSnowOutline } from "react-icons/io5";

const Empresa = () => {
    return (
    
                <div className='s4' id='empresa'>
            
            <h2>Sobre nosotros...</h2>
            <div className='bs'>
                <BsArrowDown/>
            </div>
            <div class="boxTex">
                
                <h3> En C&A  nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. </h3>
                <h3>Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</h3>

                
                <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frío , aires comerciales, equipos de frío, chillers para cerveza , etc</p> 
                            
                <p> Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricación o modificación de proyectos especiales para cada uno de nuestros cliente </p>    
            
                <p> Nuestro mayor capital son nuestros clientes asi que trabajamos permanentemente para superarnos  y  adecuándonos a su demanda asesorando sus necesidades para lograr juntos el mejor resultado. </p>

                <div className='botonContact'>                
                    <h3>Tenés algún proyectos en mente?</h3>
                    <h3>Nosotros podemos hacerlo realidad!</h3>
                    
                </div>
                <Link to="/contacto"  >Contactanos!</Link>

                
                <div className='iconText'>
                     <IoSnowOutline className='iconRotate'/>
                </div>
            </div>
        </div>
    )
}

export default Empresa