import React from 'react'
import './galeria.css'
import { useState } from 'react';
import { BsFillBackspaceFill} from "react-icons/bs";
import h1 from './galeria/heladeras/h1.jpeg'
import h3 from './galeria/heladeras/h3.jpeg'
import mostrador1 from './galeria/heladeras/mostrador1.jpeg'
import mostrador2 from './galeria/heladeras/mostrador2.jpeg'
import pozo from './galeria/heladeras/pozo.jpeg'
import proyecto1 from './galeria/heladeras/proyecto1.jpeg'
import proyecto2 from './galeria/heladeras/proyecto2.jpeg'
import proyecto3 from './galeria/heladeras/proyecto3.jpeg'
import proyecto4 from './galeria/heladeras/proyecto4.jpg'
import h4 from './galeria/heladeras/h4.jpeg'
import h5 from './galeria/heladeras/h5.jpeg'
import h6 from './galeria/heladeras/h6.jpeg'

const Heladeras = () => {
    let data = [
        {
            id: 1,
            imgSrc: h1,
        },
        {
            id: 2,
            imgSrc: h3,
        },
        {
            id: 3,
            imgSrc: mostrador1,
        },
        {
            id: 4,
            imgSrc: mostrador2,
        },
        {
            id: 5,
            imgSrc: pozo,
        },
        {
            id: 6,
            imgSrc: proyecto1,
        },
        {
            id: 7,
            imgSrc: proyecto2,
        },
        {
            id: 8,
            imgSrc: proyecto3,
        },
        {
            id: 9,
            imgSrc: proyecto4,
        },
        {
            id: 10,
            imgSrc: h4,
        },
        {
            id: 11,
            imgSrc: h5,
        },       
        {
            id: 12,
            imgSrc: h6,
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
                    <img src={tempimgSrc} style={{width:'80%'}} alt="" />
                    <BsFillBackspaceFill onClick={() => setModel(false)}/>
                </div>
                <div className='galeryTitle'>
                    <h2>Exhibidores y Heladeras!</h2>
                </div>
                <div className='galery'>
                    
                    {data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc}  alt=""/>
                            </div>
                            )
                        })} 
                </div> 
        </div>
        
) 
}

export default Heladeras