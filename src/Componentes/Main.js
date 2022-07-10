import React from 'react'
import {Link,} from 'react-router-dom'

const Main = () => {
    return (

        <div className='s1'>
            <div className='banner'>
                <div className='mainImage'>
                    <h2>Bienvenidos  a  C&A Refrgeración!</h2>
                    <div className='ver'>
                    <Link to="/productos">Ver productos</Link>
                    </div>    
                </div>
            </div>
        </div>

    )
}

export default Main