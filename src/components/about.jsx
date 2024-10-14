

import React from 'react'

function About() {
    return (
        <div className='about-sec mt-5'>
            <div className='container'>
                <div className='row'>
                    <div class=" col-6">
                        <img src="../../images/about-img.png" alt="Moving Image" class="circular-image" />
                    </div>
                    <div className='col-6'>
                        <div className='about-content'>
                            <div className='about-heading'>
                                <span>about us</span>
                                <hr className='small-line' />
                            </div>
                            <h2>Welcome to Restoran</h2>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className='experience'>
                                <div className='exp1'>
                                <div className="vline">
                                    <span className ="vertical-line"></span>
                                </div>
                                <div className='a'>
                                    <span>15</span>
                                    <div>
                                    <p>
                                    Years of</p>
                                    <h6>Experience</h6>
                                    </div>
                                </div>
                                </div>
                                <div className='exp1'>
                                <div className="vline">
                                    <span className ="vertical-line"></span>
                                </div>
                                <div className='a'>
                                    <span>50</span>
                                    <div>
                                    <p>Popular</p>
                                    <h6>Master Chefs</h6>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About