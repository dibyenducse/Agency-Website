import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './portfolio.scss';
//import VideoModal from '../VideoModal';

export default function Portfolio({ href, src, title, subtitle, variant }) {
    return (
        <Link
            to={href}
            className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
        >
            <>
                <Div className="cs-portfolio_hover" />
                <Div
                    className="cs-portfolio_bg cs-bg"
                    style={{ backgroundImage: `url("${src}")` }}
                />
                {/* Start Video Block Section */}
                {/* <Div>
                    <Div className="container">
                        <VideoModal
                            videoSrc={videoSrc}
                            bgUrl="/images/video_bg_2.jpeg"
                        />
                    </Div>
                </Div> */}
                {/* End Video Block Section */}
                <Div className="cs-portfolio_info">
                    <Div className="cs-portfolio_info_bg cs-accent_bg" />
                    <h2 className="cs-portfolio_title">{title}</h2>
                    <Div className="cs-portfolio_subtitle">{subtitle}</Div>
                </Div>
            </>
        </Link>
    );
}
