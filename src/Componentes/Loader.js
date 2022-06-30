import React from 'react'
import { IoSnowOutline } from "react-icons/io5";

const Loaders = () => {
    return (
        <div className='loadContainer' >
            <IoSnowOutline className='loader'>
            </IoSnowOutline>
            <h3>Cargando...</h3>
        </div>
    )
}

export default Loaders