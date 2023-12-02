import React, { useEffect } from 'react';
import Cta from '../Cta';
import Div from '../Div';
import Hero5 from '../Hero/Hero5';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Spacing from '../Spacing';
import VideoModal from '../VideoModal';
import { pageTitle } from '../../helper';
//import PostSlider from '../Slider/PostSlider';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
//import PricingTableList from '../PricingTable/PricingTableList';
import FunFact2 from '../FunFact/FunFact2';
import PortfolioSlider2 from '../Slider/PortfolioSlider2';
import ServiceList from '../ServiceList';
import TeamSlider from '../Slider/TeamSlider';
import TimelineSlider from '../Slider/TimelineSlider';

export default function MarketingAgencyHome() {
    pageTitle('BloomBrain');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const heroSocialLinks = [
        {
            name: 'Facebook',
            links: 'https://www.facebook.com/bloombrainmedia/',
        },
        {
            name: 'Instagram',
            links: 'https://www.instagram.com/bloombrainmedia/',
        },
    ];
    const funfaceData = [
        {
            title: 'Social Media Grow',
            factNumber: '250',
        },
        {
            title: 'Global happy clients',
            factNumber: '200',
        },
        {
            title: ' Content Created',
            factNumber: '10k',
        },
        {
            title: 'Team members',
            factNumber: '15',
        },
    ];
    return (
        <>
            {/* Start Hero Section */}
            <Hero5
                title="Bloom Your Presence,<br /> Grow Your Audience!"
                subtitle="Let your brand bloom with our meticulous Social Media Management, Growth, and Content Creation services."
                btnLink="contact"
                btnText="Let’s talk"
                socialLinksHeading="Follow Us"
                heroSocialLinks={heroSocialLinks}
            />
            {/* End Hero Section */}

            {/* Start Video Block Section */}
            <Div className="cs-video_block_1_wrap">
                <Div className="container">
                    <VideoModal
                        videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                        bgUrl="/images/video_bg_2.jpeg"
                    />
                </Div>
            </Div>
            {/* End Video Block Section */}

            {/* Start Services Section */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="Our core services"
                    subtitle="Services"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="70" md="45" />
                <ServiceList />
            </Div>
            {/* End Services Section */}

            {/* Start PortfolioSlider Section */}
            <Spacing lg="120" md="50" />
            <Div className="container">
                <h2 className="cs-font_50 cs-m0 cs-line_height_4">
                    Seamless Social Media Management, Engaging Content Creation,
                    and Impactful Ad Campaigns. Elevate your brand with
                    Bloombrain Media.
                </h2>
            </Div>
            <Spacing lg="90" md="70" />
            <PortfolioSlider2 />
            {/* End PortfolioSlider Section */}

            {/* Start FunFact Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <FunFact2
                    data={funfaceData}
                    variant="cs-no_shadow"
                    bgUrl="/images/funfact_shape_bg.svg"
                />
            </Div>
            {/* End FunFact Section */}

            {/* Start Pricing Section */}
            <Spacing lg="145" md="80" />

            <Spacing lg="125" md="55" />
            {/* End Pricing Section */}

            {/* Start Testimonial Section */}
            <TestimonialSlider />
            {/* End Testimonial Section */}

            {/* Start MovingText Section */}
            <Spacing lg="125" md="70" />
            <MovingText text="Our reputed world wide Clients" />
            <Spacing lg="100" md="70" />
            {/* End MovingText Section */}

            {/* Start LogoList Section */}
            <Div className="container">
                <LogoList />
            </Div>
            <Spacing lg="130" md="80" />
            {/* End LogoList Section */}

            {/* Start Team Section */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="Awesome team <br/>members"
                    subtitle="Our Team"
                    variant="cs-style1"
                />
                <Spacing lg="85" md="45" />
                <TeamSlider />
            </Div>
            <Spacing lg="150" md="80" />
            {/* End Team Section */}

            {/* Start Awards Section */}
            <Spacing lg="150" md="80" />
            <Div className="cs-shape_wrap_2">
                <Div className="cs-shape_2">
                    <Div />
                </Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-xl-4">
                            <SectionHeading
                                title="Global Presence, Local Impact"
                                subtitle="Discover Our Strategic Offices Across the Globe."
                                variant="cs-style1"
                            />
                            <Spacing lg="90" md="45" />
                        </Div>
                        <Div className="col-xl-7 offset-xl-1">
                            <TimelineSlider />
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80" />
            {/* End Awards Section */}

            {/* Start CTA Section */}
            <Div className="container">
                <Cta
                    title="Let’s disscuse,<br />make something <i>cool</i>  together"
                    btnText="Get In Touch"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg_3.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
