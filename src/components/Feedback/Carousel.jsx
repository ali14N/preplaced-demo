import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@material-ui/lab/Rating';
import Star from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';
const Carousel = ({ testimonial }) => {
    const settings = {
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1500,
        swipeToSlide: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
    };
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }
    const StyledRating = withStyles({
        iconFilled: {
            color: "#E6334A",
            margin: "5px"
        },
        iconEmpty: {
            margin: "5px",
        }
    })(Rating);
    return (
        <div className="carousal-container">
            <Slider {...settings}>
                {testimonial.map((info, i) => {
                    const rating = info.rating;

                    return (
                        <div style={{ width: "100%" }} key={i}>
                            <img src={info.client.picture} className="client-pic" alt={info.client.name} />
                            <p style={{
                                color: "#007BFF", fontSize: "20px", alignItems: "center", textAlign: "center",
                            }}>
                                <StyledRating
                                    name='read-only'
                                    value={rating}
                                    readOnly
                                    icon={<Star fontSize="inherit" />}
                                />
                            </p>
                            <p>{info.comment}</p><br />
                            <p>{info.client.name}</p>
                            <p>{info.client.position}</p>
                            <img src={info.client.logo} className="client-firm-logo" alt="" />
                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    );
}
export default Carousel;
