import React from 'react'
import { Link } from 'react-router-dom';
import camara5 from './GaleriaComp/galeria/camaras/camara5.jpeg';
import batea6 from './GaleriaComp/galeria/bateas/batea6.jpg';
import h1 from './GaleriaComp/galeria/heladeras/h1.jpeg'

const Nosotros = () => {




    return (
        <div className='aboutContainer'>
            <h2>Un poco sobre nosotros...</h2>
            <div className='textContainer'>
                <div class="aboutText">
                        
                        <h3> En C&A  nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. </h3>
                        <h3>Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</h3>
                    

                        <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frio , aires comerciales, equipos de frio, chillers para cerveza , etc</p> 
                                    
                        <p> Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricacion o modificacion de proyectos especiales para cada uno de nuestros cliente </p>    
                    
                        <p> Nuestro mayor capital son nuestros clientes asique trabajamos permanentemente para superarnos  y  adecuándonos a su demanda asesorando sus necesidades para lograr juntos el mejor resultado. </p>
                </div>
            </div>
            <h2>Algunas fotos de nuestros trabajos...</h2>
        <div className='gallery'>
                    <div className='galeContent'>
                        <img src={camara5} alt="" />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/galeria/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='galeContent'>
                        <img src={batea6} alt="" />
                        <p>Bateas!</p> 
                        <Link to="/galeria/bateas" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='galeContent'>
                        <img src={h1} alt="" />
                        <p>Heladeras!</p> 
                        <Link to="/galeria/heladeras" ><button>Ver mas fotos</button></Link>
                    </div>


        </div>

        </div>
    )
}

export default Nosotros