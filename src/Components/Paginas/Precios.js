import React, { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';

const Precios = () => {
    
    useEffect(() =>{
        Aos.init({
            duration : 2000
        })

    })

    return ( 
        <h1>P</h1>
     );
}
 
export default Precios;