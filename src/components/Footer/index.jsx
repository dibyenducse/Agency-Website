import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
    const copyrightLinks = [
        {
            title: 'Terms of Use',
            href: '/',
        },
        {
            title: 'Privacy Policy',
            href: '/',
        },
    ];

    const serviceMenu = [
        {
            title: 'Social Media Content Creation',
            href: '/service/service-details',
        },

        {
            title: 'Social Media Management',
            href: '/service/service-details',
        },
        {
            title: 'Social Media Growth',
            href: '/service/service-details',
        },
        {
            title: 'Social Ad Campaigns',
            href: '/service/service-details',
        },
    ];

    return (
        <footer className="cs-fooer">
            <Div className="cs-fooer_main">
                <Div className="container">
                    <Div className="row">
                        <Div className="col-lg-3 col-sm-6">
                            <Div className="cs-footer_item">
                                <TextWidget
                                    logoSrc="/images/footer_logo.svg"
                                    logoAlt="Logo"
                                    text="Let your brand bloom with our meticulous Social Media Management, Growth, and Content Creation services."
                                />
                                <SocialWidget />
                            </Div>
                        </Div>
                        <Div className="col-lg-3 col-sm-6">
                            <Div className="cs-footer_item">
                                <MenuWidget
                                    menuItems={serviceMenu}
                                    menuHeading="Services"
                                />
                            </Div>
                        </Div>
                        <Div className="col-lg-3 col-sm-6">
                            <Div className="cs-footer_item">
                                <ContactInfoWidget title="Contact Us" />
                            </Div>
                        </Div>
                        <Div className="col-lg-3 col-sm-6">
                            <Div className="cs-footer_item">
                                <Newsletter
                                    title="Subscribe"
                                    subtitle="Subscribe with us to receive exclusive content, promotions, and insights directly to your inbox."
                                    placeholder="name@mail.com"
                                />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Div className="container">
                <Div className="cs-bottom_footer">
                    <Div className="cs-bottom_footer_left">
                        <Div className="cs-copyright">
                            Copyright © 2023 Bloombrain Media Ltd.
                        </Div>
                    </Div>
                    <Div className="cs-bottom_footer_right">
                        <MenuWidget
                            menuItems={copyrightLinks}
                            variant=" cs-style2"
                        />
                    </Div>
                </Div>
            </Div>
        </footer>
    );
}
