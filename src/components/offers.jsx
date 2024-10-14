

import Carousel from 'react-bootstrap/Carousel';


function Offers() {
    return (
        <div className='offers-sec'>
            <div className='container'>
                <div className='row'>
                    <Carousel>
                        <Carousel.Item>
                            <img src='../../images/offer4.jpg' text="First slide" className='c-img' style={{ width: '100%' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='../../images/offer2.jpg' text="Second slide" className='c-img' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='../../images/offer1.jpg' text="Third slide" className='c-img' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Offers;