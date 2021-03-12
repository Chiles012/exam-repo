import React from 'react';
import Logo from '../assets/SapphireEnBlanco.png';

const Header = () => {
 
    return ( 
        <div className='header'>
            <img src={Logo} alt='logo'/>
            <div className='rigth'>
                <ul>
                    <li className='selected'>Home</li>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;