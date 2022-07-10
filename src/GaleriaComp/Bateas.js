import React from 'react'
import './galeria.css'
import { useState } from 'react';
import { BsFillBackspaceFill} from "react-icons/bs";
import batea2 from './galeria/bateas/batea2.jpg'
import batea3 from './galeria/bateas/batea3.jpg'
import batea4 from './galeria/bateas/batea4.jpg'
import batea5 from './galeria/bateas/batea5.jpg'
import batea6 from './galeria/bateas/batea6.jpg'
import batea7 from './galeria/bateas/batea7.jpg'

const Bateas = () => {

    let data = [
        {
            id: 2,
            imgSrc: batea2,
        },
        {
            id: 3,
            imgSrc: batea3,
        },
        {
            id: 4,
            imgSrc: batea4,
        },
        {
            id: 5,
            imgSrc: batea5,
        },
        {
            id: 6,
            imgSrc: batea6,
        },
        {
            id: 7,
            imgSrc: batea7,
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
                    <h2>Bateas Frigorificas!</h2>
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
export default Bateas
