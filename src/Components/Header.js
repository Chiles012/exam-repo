import React from 'react';
import Logo from '../assets/SapphireEnBlanco.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const changePage = e => {
        console.log(e.target)
        document.querySelectorAll('.rigth ul li').forEach( f => {
            f.classList.remove('selected');

        })
        e.target.classList.add('selected');

    }
 
    return ( 
        <div className='header'>
            <img src={Logo} alt='logo'/>
            <div className='rigth'>
                <ul>
                    <Link to='/'><li onClick={ e => changePage(e) } className='selected'>Home</li></Link>
                    <Link to='/nosotros'><li onClick={ e => changePage(e) }>Nosotros</li></Link>
                    <Link to='/servicios'><li onClick={ e => changePage(e) }>Servicios</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;