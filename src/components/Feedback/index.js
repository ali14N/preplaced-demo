import React from 'react';
import { testimonial } from '../../testimonial'
import Carousel from './Carousel'
const Feedback = () => {
    return (
        <div className="container" >
            <h2 style={{ marginLeft: "15px" }}>What do the <span className="highlighted-text">Customers Say?</span></h2>
            <Carousel testimonial={testimonial} />
        </div>
    )
}
export default Feedback;