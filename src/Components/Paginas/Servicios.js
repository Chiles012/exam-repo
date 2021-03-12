import React, { useEffect } from 'react';
import Aos from 'aos';
import { Row, Col } from 'react-bootstrap';

import 'aos/dist/aos.css';

const Servicios = () => {

    return ( 
        <div style={{
            textAlign: 'center', 
            display: 'flex',
            height: '100vh'
        }}>
            <Row>
                <Col
                    md={8}
                >
                    <div className='bb-servicios'>
                        <h1>Paginas web</h1>
                        <p>
                            Paginas web a su comodidad
                            con las caracteristicas que usted desee,
                        </p>
                        <button className='btn rounded'><span className='text-green'>Cotizar</span></button>
                    </div>
                </Col>
                <Col
                    md={5}
                >
                    <div className='bb-servicios'>
                        <h1>E-Commerce</h1>
                        <p>
                            Una e-commerce es un comercio en linea
                            que permite a sus clientes hacer compras
                            y crear una marca personal.
                        </p>
                        <button className='btn rounded'><span className='text-green'>Cotizar</span></button>
                    </div>
                </Col>
                <Col
                    md={3}
                >
                    <div className='bb-servicios'>
                        <h1>Landing Page</h1>
                        <p>
                            Una landing page es una pagina sencilla 
                            para dar imagen a tu empresa o como portafolio.
                        </p>
                        <button className='btn rounded'><span className='text-green'>Cotizar</span></button>
                    </div>
                </Col>
            </Row>
            
        </div>
     );
}
 
export default Servicios;