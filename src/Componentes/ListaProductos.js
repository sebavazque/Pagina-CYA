import React from 'react'
import camara from './imagen/camara.jpeg'
import h1 from './imagen/h1.jpeg'
import AIRE from './imagen/AIRE.jpg'
import central from './imagen/central.jpg'
import { Link } from 'react-router-dom'
import { BsChevronDoubleDown } from "react-icons/bs";
import mostrador2 from './imagen/mostrador2.jpeg'


const ListaProductos = ({producto}) => {
    return (
    <div className='bannerContainer'>
        <div className='bannerProd' >
            <div className='bannerCont'>
                <h2>Nuestros productos</h2>
            </div>
        </div>       
        <hr className='iconBan' />
        <div className='iconItem'>
        <BsChevronDoubleDown />
        </div>

        <div className='productos'>
                    <div className='productContent'>
                        <img src={camara} alt=""/>
                        <h2>Camaras Frigorificas</h2>
                        <Link to='/camara/1'>Ver mas detalles</Link>
                    </div>


                    <div className='productContent'>
                        <img src={mostrador2} alt=""/>
                        <h2>Bateas</h2>
                        <Link to='/batea/6' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={h1} alt=""/>
                        <h2>Heladeras</h2>
                        <Link to='/heladera/2' >Ver mas detalles</Link>
                    </div>


                    <div className='productContent'>
                        <img src={central} alt="" />
                        <h2>Centrales de Frio</h2>
                        <Link to='/central/4' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={AIRE} alt="" />
                        <h2>Aires Acondicionados</h2>
                        <Link to='/aire/3' >Ver mas detalles</Link>
                    </div> 



        </div>
    
    </div>
    
    )
}

export default ListaProductos