import React, { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';

const Home = () => {

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
            height: '100vh'
        }} data-aos="fade-up">
            <div className='bb'>
                <h1>Sapphire Test</h1>
            </div>
        </div>
    );
}
 
export default Home;