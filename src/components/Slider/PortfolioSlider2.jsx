import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import VideoModal from '../VideoModal';

export default function PortfolioSlider2() {
    const portfolioData = [
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: 'https://www.youtube.com/shorts/wDPYHEXzQWg',
            src: 'https://www.youtube.com/shorts/wDPYHEXzQWg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_32.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_33.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_34.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_31.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_32.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_33.jpeg',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_34.jpeg',
        },
    ];

    /** Slider Settings **/
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
            {portfolioData.map((item, index) => (
                <Div key={index}>
                    <VideoModal
                        videoSrc={item.src}
                        bgUrl="/images/video_bg_2.jpeg"
                    />
                </Div>
            ))}
        </Slider>
    );
}
