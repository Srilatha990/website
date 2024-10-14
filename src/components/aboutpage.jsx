

import React from 'react'

function AboutPage() {
  return (
    <div className='a-page'>
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
                      <span className="vertical-line"></span>
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
                      <span className="vertical-line"></span>
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

      <div className='team-sec'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='menu-heading'>
                        <hr className='small-line' />
                        <span> Team Members</span>
                        <hr className='small-line' />
                    </div>
                    <h2 className='m-h'>Our Master Chefs</h2>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3'>
                    <div class="review">
                        <div class="circle">
                            <img src="../../images/team-1.jpg" alt="Your Image" />
                        </div>
                        <h6 className='mt-3'>Ross Geller</h6>
                    </div>
                    </div>
                    <div className='col-lg-3'>
                    <div class="review">
                        <div class="circle">
                            <img src="../../images/team-2.jpg" alt="Your Image" />
                        </div>
                        <h6 className='mt-3'>John Doe</h6>
                    </div>
                    </div>
                    <div className='col-lg-3'>
                    <div class="review">
                        <div class="circle">
                            <img src="../../images/team-3.jpg" alt="Your Image" />
                        </div>
                        <h6 className='mt-3'>Sam Wilson</h6>
                    </div>
                    </div>
                    <div className='col-lg-3'>
                    <div class="review">
                        <div class="circle">
                            <img src="../../images/team-4.jpg" alt="Your Image" />
                        </div>
                        <h6 className='mt-3'>Rachel Green</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage
