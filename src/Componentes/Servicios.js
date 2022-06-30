import React from 'react'
import idea from './imagen/idea.png'
import compromiso from './imagen/compromiso.png'
import engranaje from './imagen/engranaje.png'
import { BsChevronDoubleDown } from "react-icons/bs";

const Servicios = () => {
  return (

    <div className='s2'>
    <h2>Servicios</h2>
    <div className='bs'><BsChevronDoubleDown/></div>


    <div className='cards'>
        <div className='card'>
            <img id='img1'  src={engranaje} alt=""/>
            <h4>Mantenimiento</h4>
            <span>Nuestro equipo esta capacitado para poder resolver cualquier tipo de problemas, estamos siempre listos para actuar lo antes posible.</span>
        </div>
        <div className='card'>
            <img src={idea} alt=""/>
            <h4>Creatividad</h4>
            <span>Contamos con un equipo de asesoramiento y asistencia técnica desde su consulta hasta el mantenimiento de los equipos.</span>
        </div>
        <div className='card'>
            <img id='img1' src={compromiso} alt="" />
            <h4>Compromiso</h4>
            <span>Nuestros clientes son nuestra mayor fuente de crecimiento por lo que nos comprometemos a entregar siempre nuestros trabajos a tiempo y con la calidad que se merecen</span>
        </div>
    </div>
    </div>

  )
}

export default Servicios