import React from 'react';
import Logo from '../assets/SapphireEnBlanco.png';

const Header = () => {
 
    return ( 
        <div className='header'>
            <img src={Logo} alt='logo'/>
            <div className='rigth'>
                <ul>
                    <a href="/">
                    <li className='selected'>Home</li>
                    </a>
                    <a href="/nosotros">
                    <li>Nosotros</li>
                    </a>
                    <a href="/servicios">
                    <li>Servicios</li>
                    </a>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;