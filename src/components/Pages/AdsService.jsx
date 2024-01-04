import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Accordion from '../AccordionAd';
import Button from '../Button';
import Cta from '../Cta';
import IconBox from '../IconBox';
//import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
//import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';

export default function AdsService() {
    pageTitle('Service Details');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* <PageHeading
                title="Service Details"
                bgSrc="/images/service_hero_bg.jpeg"
                pageLinkText={params.serviceDetailsId}
            /> */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <SectionHeading
                    title="Social Ad Campaigns"
                    subtitle="Graphics-Videos-Animation"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_1.svg"
                            title="Campaign Strategies"
                            subtitle="Tailor-made ad campaigns designed to reach specific demographics, ensuring your message resonates with the right audience."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_2.svg"
                            title="Data-Driven Approach"
                            subtitle="Utilize analytics and insights to craft informed ad strategies, maximizing ROI and optimizing campaign performance."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_3.svg"
                            title="Multi-Platform"
                            subtitle="Experience across various social media platforms, ensuring your ad campaigns are strategically placed for maximum impact."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                </Div>
            </Div>
            <Spacing lg="120" md="50" />
            <Div className="container">
                <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-radius_15 cs-shine_hover_1">
                            <img
                                src="/images/2.png"
                                alt="Service"
                                className="cs-radius_15 w-100"
                            />
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h2 className="cs-font_50 cs-m0">
                            Below our Social Ad Campaign services
                        </h2>
                        <Spacing lg="50" md="30" />
                        <Div className="row">
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Strategic Ad Campaign Planning"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Audience Targeting Expertise"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Compelling Ad Copy and Visuals"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Multi-Platform Campaigns"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Ad Performance Analytics"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Budget Optimization Strategies"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="A/B Testing for Optimization"
                                    variant="cs-type2"
                                />
                                <Spacing lg="0" md="10" />
                            </Div>
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Conversion Tracking and Analysis"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Adaptive to Industry Trends"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Strategic Ad Placements"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80" />
            {/* <TestimonialSlider /> */}
            {/* <Spacing lg="145" md="80" /> */}
            <Div className="container cs-shape_wrap_4">
                <Div className="cs-shape_4"></Div>
                <Div className="cs-shape_4"></Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-xl-5 col-lg-6">
                            <SectionHeading
                                title="Some pre questions and answers"
                                subtitle="FAQ’s"
                            />
                            <Spacing lg="90" md="45" />
                        </Div>
                        <Div className="col-lg-6 offset-xl-1">
                            <Accordion />
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
        </>
    );
}
