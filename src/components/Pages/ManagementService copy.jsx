import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pageTitle } from '../../helper';
// import Accordion from '../Accordion';
import Button from '../Button';
import Cta from '../Cta';
import IconBox from '../IconBox';
//import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
//import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import Accordion from '../AccordionManage';

export default function ManagementService() {
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
                    title="Social Media Management"
                    subtitle="Engagement-Optimization-Analytics"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_1.svg"
                            title="Strategic Engagement"
                            subtitle=" Elevate your brand's online presence with our expert Social Media Management. We curate strategic content and engage your audience for maximum impact."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_2.svg"
                            title="Content Curation"
                            subtitle="Let us handle the details. Our Social Media Management service includes meticulous content curation to ensure a cohesive and compelling digital narrative."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_3.svg"
                            title="Insight Optimization"
                            subtitle="We analyze, refine, and optimize your social media strategy for optimal performance, ensuring your brand thrives in the dynamic digital landscape."
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
                                src="/images/service_img_1.jpeg"
                                alt="Service"
                                className="cs-radius_15 w-100"
                            />
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h2 className="cs-font_50 cs-m0">
                            Below our social media management services
                        </h2>
                        <Spacing lg="50" md="30" />
                        <Div className="row">
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Content Calendar"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Audience Engagement"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Platform Optimization"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Strategic Posting"
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
                                    btnText="Campaign Management"
                                    variant="cs-type2"
                                />
                                <Spacing lg="0" md="10" />
                            </Div>
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Analytics Reports"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Content Creation"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Community Building"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Adaptation and Innovation"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Influencer Collaboration"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Crisis Management"
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
