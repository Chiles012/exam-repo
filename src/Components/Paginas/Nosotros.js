import React, { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';

const Nosotros = () => {

    return ( 
        <div style={{
            textAlign: 'center', 
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }} data-aos="fade-up">
            <div>
                <h1>Nosotros</h1>
                <p>Sapphire es una empresa de desarrorro de software.</p>
                <div className='redes'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Nosotros;