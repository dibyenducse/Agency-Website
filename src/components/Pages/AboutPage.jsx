import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
//import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function AboutPage() {
    pageTitle('About');

    const funfaceData = [
        {
            title: 'Global Happy Clients',
            factNumber: '200',
        },
        {
            title: 'Social Media Grow',
            factNumber: '250',
        },
        {
            title: 'Content Created',
            factNumber: '10k',
        },
        {
            title: 'Team Members',
            factNumber: '15',
        },
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* Start Page Heading Section */}
            {/* <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      /> */}
            {/* End Page Heading Section */}

            {/* Start About Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Div className="row">
                    <Div className="col-xl-5 col-lg-7">
                        <SectionHeading
                            title="Your trusted partner for business"
                            subtitle="About Our Agency"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Bloombrain Media was born out of a vision to
                                revolutionize social media engagement. Our story
                                is one of growth, innovation, and a relentless
                                pursuit of excellence. From our humble
                                beginnings, we've evolved into a passionate
                                team, committed to elevating brands through
                                strategic social media solutions.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                    </Div>
                    <Div className="col-lg-5 offset-xl-2">
                        <img
                            src="/images/about_img_1.jpeg"
                            alt="About"
                            className="w-100 cs-radius_15"
                        />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-7">
                        <img
                            src="/images/about_img_2.jpeg"
                            alt="About"
                            className="w-100 cs-radius_15"
                        />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-5">
                        <img
                            src="/images/about_img_3.jpeg"
                            alt="About"
                            className="w-100 cs-radius_15"
                        />
                        <Spacing lg="25" md="25" />
                    </Div>
                </Div>
            </Div>
            <Spacing lg="75" md="55" />
            {/* End About Section */}

            {/* Start Fun Fact Section */}
            <Div className="container">
                <FunFact
                    title="Our fun fact"
                    subtitle="Ready to elevate your social media game? Connect with Bloombrain Media on your favorite platforms, and let's embark on a journey to unlock the full potential of your brand's social presence."
                    data={funfaceData}
                />
            </Div>
            {/* End Fun Fact Section */}

            {/* Start Why Choose Section */}
            <Spacing lg="100" md="80" />
            <Div className="container">
                <Div className="row">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-image_layer cs-style1">
                            <Div className="cs-image_layer_in">
                                <img
                                    src="/images/about_img_4.jpeg"
                                    alt="About"
                                    className="w-100 cs-radius_15"
                                />
                            </Div>
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-xl-5 offset-xl-1 col-lg-6">
                        <SectionHeading
                            title="Highly experienced pepole with us"
                            subtitle="Why Choose Us"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Choosing Bloombrain Media means choosing a
                                social media partner dedicated to growing your
                                digital presence. We tailor our services to meet
                                the unique needs of your brand, leveraging the
                                power of social media to foster community,
                                engagement, and business success.
                            </p>
                            <Spacing lg="15" md="15" />
                            <p className="cs-m0">
                                Meet the faces behind Bloombrain Media – a team
                                of social media enthusiasts, content creators,
                                and growth strategists. Each member brings a
                                wealth of experience in navigating the
                                intricacies of social media platforms, ensuring
                                your brand receives expert guidance.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="0" />
                        </SectionHeading>
                    </Div>
                </Div>
            </Div>
            {/* End Why Choose Section */}

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
            {/* End Team Section */}

            {/* Start CTA Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
