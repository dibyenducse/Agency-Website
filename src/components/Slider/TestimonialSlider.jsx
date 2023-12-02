import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const testimonialData = [
        {
            testimonialThumb: '/images/testimonial_1.jpeg',
            testimonialText:
                'Bloombrain Media exceeded our expectations! Their organic growth strategies transformed our social media presence. Their professionalism in video content creation and adept management of our social accounts showcased their commitment to excellence.',
            avatarName: 'Willny Guifarro',
            avatarDesignation: 'Equity Of Texas',
            ratings: '5',
        },
        {
            testimonialThumb: '/images/testimonial_2.jpeg',
            testimonialText:
                'Choosing Bloombrain Media was the best decision for my business. Their organic growth tactics brought significant results. The video and reels content they produced was not only engaging but also aligned perfectly with our brand. True professionals!',
            avatarName: 'Sarah Smith',
            avatarDesignation: 'Small Business Owner',
            ratings: '5',
        },
        {
            testimonialThumb: '/images/testimonial_3.jpeg',
            testimonialText:
                "Bloombrain Media is a game-changer! Their expertise in managing our social accounts streamlined our online presence. The organic growth strategies gave our brand a genuine boost. The video content was spot on – capturing our audience's attention effortlessly.",
            avatarName: 'Alex Rodriguez',
            avatarDesignation: 'E-commerce Entrepreneur',
            ratings: '5',
        },
        {
            testimonialThumb: '/images/testimonial_1.jpeg',
            testimonialText:
                "Professionalism at its best! Bloombrain Media's approach to organic growth is strategic and effective. Their video content transformed our brand story, making it visually appealing. Social account management has been seamless, allowing us to focus on our business.",
            avatarName: 'Emily Turner',
            avatarDesignation: 'Fashion Boutique',
            ratings: '5',
        },
    ];
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <div
            {...props}
            className={
                'slick-prev slick-arrow' +
                (currentSlide === 0 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
        >
            <Icon icon="bi:arrow-left" />
        </div>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <div
            {...props}
            className={
                'slick-next slick-arrow' +
                (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
        >
            <Icon icon="bi:arrow-right" />
        </div>
    );
    return (
        <>
            <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
                <Spacing lg="130" md="80" />
                <Div className="cs-shape_3 cs-to_up">
                    <img src="/images/shape_1.svg" alt="Shape" />
                </Div>
                <Div className="container">
                    <Div className="cs-testimonial_slider">
                        <Div className="cs-testimonial_slider_left">
                            <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                centerMode={true}
                                centerPadding="0px"
                                arrows={false}
                            >
                                {testimonialData.map((item, index) => (
                                    <Div
                                        className="slider-nav_item"
                                        key={index}
                                    >
                                        <Div className="cs-rotate_img">
                                            <Div className="cs-rotate_img_in">
                                                <img
                                                    src={item.testimonialThumb}
                                                    alt="Thumb"
                                                />
                                            </Div>
                                        </Div>
                                    </Div>
                                ))}
                            </Slider>
                        </Div>
                        <Div className="cs-testimonial_slider_right">
                            <Slider
                                asNavFor={nav2}
                                ref={(slider1) => setNav1(slider1)}
                                prevArrow={<SlickArrowLeft />}
                                nextArrow={<SlickArrowRight />}
                                className="cs-arrow_style1"
                            >
                                {testimonialData.map((item, index) => (
                                    <Div key={index}>
                                        <Testimonial
                                            testimonialText={
                                                item.testimonialText
                                            }
                                            avatarName={item.avatarName}
                                            avatarDesignation={
                                                item.avatarDesignation
                                            }
                                            ratings={item.ratings}
                                        />
                                    </Div>
                                ))}
                            </Slider>
                        </Div>
                    </Div>
                </Div>
                <Spacing lg="130" md="80" />
            </Div>
        </>
    );
}
