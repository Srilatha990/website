import React, { useState } from 'react';


const testimonialsData = [
    {
        quote: "This service completely transformed my job application process.",
        author: "John Doe",
        role: "Marketing Manager, ABC Corp",
        image: "../../images/testimonial-1.jpg" // Placeholder image, replace with actual image
    },
    {
        quote: "I landed my dream job thanks to the excellent CV and cover!",
        author: "Jane Smith",
        role: "Software Engineer, XYZ Ltd",
        image: "../../images/testimonial-1 (1).jpg"
    },
    {
        quote: "Their advice on crafting the perfect cover letter made !",
        author: "Sam Wilson",
        role: "Product Manager, DEF Inc",
        image: "../../images/testimonial-3.jpg"
    },
    {
        quote: "Amazing support and guidance throughout the job search process!",
        author: "Rachel Green",
        role: "Sales Lead, GHI Tech",
        image: "../../images/testimonial-4.jpg"
    },
    {
        quote: "Incredible insights that helped me stand out from other.",
        author: "Ross Geller",
        role: "Paleontologist, University",
        image: "../../images/testimonial-1.jpg"
    },
    {
        quote: "Helped me revamp my entire career strategy.",
        author: "Monica Geller",
        role: "Head Chef, XYZ Restaurant",
        image: "../../images/testimonial-1 (1).jpg"
    }
    // Add more testimonials as needed
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Number of cards to display at once

    // Handle Next
    const goToNext = () => {
        if (currentIndex + itemsPerPage < testimonialsData.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        } else {
            setCurrentIndex(0); // Loop back to the start
        }
    };

    // Handle Previous
    const goToPrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        } else {
            setCurrentIndex(testimonialsData.length - itemsPerPage); // Loop to the end
        }
    };

    // Get the visible items (3 cards at a time)
    const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="testimonial-section">
            <div className='container'>
            <div className='row text-center'>
                    <div className='menu-heading'>
                        <hr className='small-line' />
                        <span> Testimonial</span>
                        <hr className='small-line' />
                    </div>
                    <h2 className='m-h'>Our Clients Say!!!</h2>
                </div>
                <div className='row mt-5'>
                    <div className="carousel">
                        <button className="prev" onClick={goToPrev}>&#10094;</button>
                        <div className="carousel-inner">
                            {visibleTestimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial">
                                    <img src={testimonial.image} alt={testimonial.author} className="reviewer-img" />
                                    <p>"{testimonial.quote}"</p>
                                    <div className="author">{testimonial.author}</div>
                                    <div className="role">{testimonial.role}</div>
                                </div>
                            ))}
                        </div>
                        <button className="next" onClick={goToNext}>&#10095;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
