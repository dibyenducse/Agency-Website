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
                    title="Social Media Video Editing"
                    subtitle="Tiktok-Instagram-Youtube"
                    variant="cs-style1 text-center"
                />
                <Spacing lg="90" md="45" />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_1.svg"
                            title="Creative Storytelling"
                            subtitle=" Transform your brand's online identity through our skilled Social Media Video Editing. We craft compelling narratives, ensuring your message resonates and captivates your audience for a lasting impact.

"
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_2.svg"
                            title="Seamless Editing"
                            subtitle="Leave the intricacies to us. Our Social Media Video Editing service guarantees flawless editing, creating a seamless and visually stunning experience. From transitions to effects, we've got every detail covered."
                        />
                        <Spacing lg="30" md="30" />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon="/images/icons/service_icon_3.svg"
                            title="Performance"
                            subtitle="We go beyond the surface. Our team analyzes, refines, and enhances your social media video strategy for optimal engagement, ensuring your brand stands out in the ever-evolving digital landscape."
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
                                src="/images/5.png"
                                alt="Service"
                                className="cs-radius_15 w-100"
                            />
                        </Div>
                        <Spacing lg="0" md="40" />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h2 className="cs-font_50 cs-m0">
                            Below our social media video editing services
                        </h2>
                        <Spacing lg="50" md="30" />
                        <Div className="row">
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Talking Head Video"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Subtitles and Captions"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Visual To Script"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Youtube Long Video"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Trending Background"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Royality Free Music"
                                    variant="cs-type2"
                                />
                                <Spacing lg="0" md="10" />
                            </Div>
                            <Div className="col-lg-6">
                                <Button
                                    btnLink=""
                                    btnText="Animation & Transition"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Motion Graphics"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Product Overview"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="UGC Videos"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="AI Script To Visual"
                                    variant="cs-type2"
                                />
                                <Spacing lg="20" md="10" />
                                <Button
                                    btnLink=""
                                    btnText="Animation Shorts"
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
