import React, { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';

const Nosotros = () => {

    useEffect(() =>{
        Aos.init({
            duration : 2000
        })

    })

    return ( 
        <div style={{
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100vw',
            flexDirection: 'column',
            height: '100vh'
        }} data-aos="fade-up">
            <div style={{ flexDirection: 'column' }}>
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