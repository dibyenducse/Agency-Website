import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
import Button from '../Button';
import Cta from '../Cta';
import IconBox from '../IconBox';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import Accordion from '../AccordionGrowth';

export default function GrowthService() {
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
                    title="Social Media Organic Growth"
                    subtitle="Graphics-Videos-Animation"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_1.svg"
                            title="Targeted Audience"
                            subtitle="Strategically expand your reach to a tailored audience, focusing on demographics aligned with your brand objectives."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_2.svg"
                            title="Organic Growth"
                            subtitle="Authentically grow your follower base through engaging content and community-building initiatives."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_3.svg"
                            title="Performance-Driven"
                            subtitle="Data-driven insights guide our strategies for sustainable growth across social media platforms."
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
                                src="/images/4.png"
                                alt="Service"
                                className="cs-radius_15 w-100"
                            />
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h2 className="cs-font_50 cs-m0">
                            Below our social media growth services
                        </h2>
                        <Spacing lg="50" md="30" />
                        <Div className="row">
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Targeted Follower Acquisition"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Engagement Boost"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Content Optimization"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Hashtag Strategy"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Cross-Platform Synergy"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Analytics and Insights"
                                    variant="cs-type2"
                                />
                                <Spacing lg="0" md="10" />
                            </Div>
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Community Building"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Competitor Analysis"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Consistent Growth Campaigns"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Performance Reporting"
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
