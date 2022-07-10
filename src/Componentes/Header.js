import {Link} from 'react-router-dom'
import { IoSnow } from "react-icons/io5";
import { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";

function Header () {
    const [navMenu , setNavMenu] = useState(false);
    const [menu, setMenu] = useState(false);

    const mobilMenu = () => {
        if(window.innerWidth < 608){
            setNavMenu(true);
        }else{
            setNavMenu(false);
        }
    }

    window.addEventListener('resize', mobilMenu);
    
    const cambiarMenu = () => {
        if(window.scrollY > 100){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }


    window.addEventListener('scroll', cambiarMenu);



    


    return (
        <header className={menu ? 'headerScroll' : 'header' }> 
            
                <Link to='/'> <IoSnow className='logoIcon'/> </Link>
                <div className={navMenu ? 'dropdown' : 'nav'}>
                        <nav className='nav' >              
                            <ul>
                                <li><Link to='/'>Inicio</Link></li>
                                <li><Link to='/productos'>Productos</Link></li>
                                <li><Link to='/nosotros'>Nosotros</Link></li>
                                <li><Link to='/contacto'>Contacto</Link></li>
                            </ul>
                        </nav>

                    <div className='menu'>
                        <button class="dropbtn">
                            <AiOutlineBars/>
                        </button>
                        <div class='dropdown-content'>
                            <ul>
                                <li><Link to='/'>Inicio</Link></li>
                                <li><Link to='/productos'>Productos</Link></li>
                                <li><Link to='/nosotros'>Nosotros</Link></li>
                                <li><Link to='/contacto'>Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </header>


    )
}

export default Header