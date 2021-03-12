import React from 'react';
import Logo from '../assets/SapphireEnBlanco.png';
import {BrowserRoute as Router, Link, Switch} from "react-router-dom"

const Header = () => {
 
    return ( 
        <div className='header'>
            <img src={Logo} alt='logo'/>
            <div className='rigth'>
                <ul>
                    <li className='selected'><Link to = "/">Home</Link></li>
                    <li><Link to = "/nosotros">Nosotros</Link></li>
                    <li><Link to = "/servicios">Servicios</Link></li>
                </ul>
            </div>
        </div>
     );


}
 
export default Header;