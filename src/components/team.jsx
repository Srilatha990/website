

import React from 'react'

function Team() {
    return (
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
    )
}


export default Team