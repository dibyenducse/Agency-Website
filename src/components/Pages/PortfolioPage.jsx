import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
//import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
    pageTitle('Portfolio');
    const [active, setActive] = useState('all');
    const [itemShow, setItemShow] = useState(7);
    const portfolioData = [
        {
            title: '@thetonymont',
            subtitle: 'See Details',
            href: 'https://www.youtube.com/watch?v=VcaAVWtP48A',
            src: 'https://www.youtube.com/watch?v=VcaAVWtP48A',
            category: 'ui_ux_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_5.jpeg',
            category: 'logo_design',
        },
        {
            title: '@towneandcountree',
            subtitle: 'See Details',
            href: 'https://photos.app.goo.gl/eAne7diKJDG9hB6eA',
            src: '/images/1205.png',
            category: 'shorts',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_7.jpeg',
            category: 'mobile_apps',
        },
        {
            title: '@josheprayan',
            subtitle: 'See Details',
            href: 'https://photos.app.goo.gl/SCrUM6dtcFS6FpPg8',
            src: '/images/1204.png',
            category: 'ui_ux_design',
        },
        {
            title: '@foodlovers',
            subtitle: 'See Details',
            href: 'https://photos.app.goo.gl/mzNioESRW5eqVByE8',
            src: '/images/1206.png',
            category: 'shorts',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_10.jpeg',
            category: 'logo_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_4.jpeg',
            category: 'ui_ux_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_5.jpeg',
            category: 'logo_design',
        },
        {
            title: 'Colorful Art Work',
            subtitle: 'See Details',
            href: '/portfolio/portfolio-details',
            src: '/images/portfolio_6.jpeg',
            category: 'shorts',
        },
    ];
    const categoryMenu = [
        {
            title: 'Shorts or Reels',
            category: 'shorts',
        },
        {
            title: 'Trending Content ',
            category: 'mobile_apps',
        },
        {
            title: 'Talking Head Videos',
            category: 'ui_ux_design',
        },
        {
            title: 'Captions & Subtitle',
            category: 'logo_design',
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" /> */}
            <Spacing lg="145" md="80" />
            <Div className="container">
                <Div className="cs-portfolio_1_heading">
                    <SectionHeading
                        title="Some recent work"
                        subtitle="Our Content Portfolio"
                    />
                    <Div className="cs-filter_menu cs-style1">
                        <ul className="cs-mp0 cs-center">
                            <li className={active === 'all' ? 'active' : ''}>
                                <span onClick={() => setActive('all')}>
                                    All
                                </span>
                            </li>
                            {categoryMenu.map((item, index) => (
                                <li
                                    className={
                                        active === item.category ? 'active' : ''
                                    }
                                    key={index}
                                >
                                    <span
                                        onClick={() => setActive(item.category)}
                                    >
                                        {item.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Div>
                </Div>
                <Spacing lg="90" md="45" />
                <Div className="row">
                    {portfolioData.slice(0, itemShow).map((item, index) => (
                        <Div
                            className={`${
                                index === 3 || index === 6
                                    ? 'col-lg-8'
                                    : 'col-lg-4'
                            } ${
                                active === 'all'
                                    ? ''
                                    : !(active === item.category)
                                    ? 'd-none'
                                    : ''
                            }`}
                            key={index}
                        >
                            <Portfolio
                                title={item.title}
                                subtitle={item.subtitle}
                                href={item.href}
                                src={item.src}
                                variant="cs-style1 cs-type1"
                            />
                            <Spacing lg="25" md="25" />
                        </Div>
                    ))}
                </Div>

                <Div className="text-center">
                    {portfolioData.length <= itemShow ? (
                        ''
                    ) : (
                        <>
                            <Spacing lg="65" md="40" />
                            <span
                                className="cs-text_btn"
                                onClick={() => setItemShow(itemShow + 3)}
                            >
                                <span>Load More</span>
                                <Icon icon="bi:arrow-right" />
                            </span>
                        </>
                    )}
                </Div>
            </Div>
            <Spacing lg="145" md="80" />
            <Cta
                title="info@bloombrainmedia.com"
                bgSrc="/images/cta_bg_2.jpeg"
                variant="rounded-0"
            />
        </>
    );
}
