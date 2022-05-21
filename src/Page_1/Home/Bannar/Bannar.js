import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../../src/img/bannar/1920x360 (1).jpg';
import bannar2 from '../../../../src/img/bannar/1920x360 (2).jpg';
import bannar3 from '../../../../src/img/bannar/1920x360 (3).jpg';



const Bannar = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100 "
                        src={bannar1}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100"
                        src={bannar3}
                        alt="Third slide"
                    />
                  
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;