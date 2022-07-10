import React from 'react'
import camara1 from './galeria/camaras/camara1.jpg'
import camara2 from './galeria/camaras/camara2.jpeg'
import camara3 from './galeria/camaras/camara3.jpg'
import camara4 from './galeria/camaras/camara4.jpg'
import camara5 from './galeria/camaras/camara5.jpeg'
import camara6 from './galeria/camaras/camara6.jpeg'
import camara7 from './galeria/camaras/camara7.jpeg'
import camara8 from './galeria/camaras/camara8.jpeg'
import './galeria.css'
import { useState } from 'react';
import { BsFillBackspaceFill} from "react-icons/bs";


const Camaras = () => {

    let data = [
        {
            id: 1,
            imgSrc: camara1,
        },
        {
            id: 2,
            imgSrc: camara2,
        },
        {
            id: 3,
            imgSrc: camara3,
        },
        {
            id: 4,
            imgSrc: camara4,
        },
        {
            id: 5,
            imgSrc: camara5,
        },
        {
            id: 6,
            imgSrc: camara6,
        },
        {
            id: 7,
            imgSrc: camara7,
        },
        {
            id: 8,
            imgSrc: camara8,
        }
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc , setTempimgSrc] = useState('')
    const getImg = (imgSrc) =>{
            setTempimgSrc(imgSrc)
            setModel(true)
    }

    return ( 
        <div className='galeryCont'>
                
        
                <div className={model? "model open" : "model"}>
                    <img src={tempimgSrc} style={{width:'80%'}} alt=""/>
                    <BsFillBackspaceFill onClick={() => setModel(false)}/>
                </div>
                <div className='galeryTitle'>
                    <h2>Camaras Frigorificas!</h2>
                </div>
                <div className='galery'>
                    
                    {data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" />
                            </div>
                            )
                        })} 
                </div> 
        </div>
        
) 

    }
export default Camaras