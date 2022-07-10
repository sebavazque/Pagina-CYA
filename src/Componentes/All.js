import React from 'react'
import Servicios from './Servicios'
import Empresa from './Empresa';
import Main from './Main';
import BanProductos from './BanProductos';



const All = () => {
    return (
        <div>

            <Main/>

            <Servicios/> 

            <BanProductos/>

            <Empresa/>

            

        </div>
    )
}

export default All