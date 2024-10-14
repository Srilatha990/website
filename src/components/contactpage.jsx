

import React from 'react'

function Contactpage() {
    return (
        <div>
            <div className='container'>
                <div className='row text-center'>
                    <div className='menu-heading'>
                        <hr className='small-line' />
                        <span> Contact Us</span>
                        <hr className='small-line' />
                    </div>
                    <h2 className='m-h'>Contact For Any Query</h2>
                </div>
                <div className='row mt-5 mb-5'>
                    <div className='col-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.940100821283!2d78.55095717572428!3d17.353324099456636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99005a6b6089%3A0x78a0bd01ec6960f2!2sTechno%20Tide%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728899364514!5m2!1sen!2sin" width="600" height="400" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-6'>
                        <div className='dd'>
                            <div>
                                <div className='m-heading'>
                                    <span> Booking</span>
                                    <hr className='small-line' />
                                </div>
                                <div className='be'>
                                    <span className='bi bi-envelope-open-fill'></span>
                                    <p>book@example.com</p>
                                </div>
                            </div>
                            <div>
                                <div className='m-heading'>
                                    <span> General</span>
                                    <hr className='small-line' />
                                </div>
                                <div className='be'>
                                    <span className='bi bi-envelope-open-fill'></span>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div>
                                <div className='m-heading'>
                                    <span> Technical</span>
                                    <hr className='small-line' />
                                </div>
                                <div className='be'>
                                    <span className='bi bi-envelope-open-fill'></span>
                                    <p>tech@example.com</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
