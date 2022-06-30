import React from 'react'
import AIRE from './imagen/AIRE.jpg'
import camara from './imagen/camara.jpeg'
import mostrador2 from './imagen/mostrador2.jpeg'
import central from './imagen/central.jpg'
import {Link,} from 'react-router-dom'

const BanProductos = () => {
  return (
    
    <div className='s3'>
        <h2>Algunos de nuestros productos</h2>
        <div className='content'>

            <div className='imgs'>
            <Link to="/productos" ><img id='img' src= {AIRE} alt="" /></Link>
            <Link to="/productos" ><img id='img' src= {camara} alt="" /></Link>
            <Link to="/productos" ><img id='img' src={mostrador2} alt="" /></Link>
            <Link to="/productos" ><img id='img' src={central}  alt=""/></Link>
            </div>
        </div>
        <div  className='verMas' >
            <Link to="/productos" >Ver mas productos</Link>
        </div>
    </div>

  )
}

export default BanProductos