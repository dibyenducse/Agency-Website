import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
    return (
        <Div className="cs-social_btns cs-style1">
            <Link
                to="https://facebook.com/bloombrainmedia"
                className="cs-center"
            >
                <Icon icon="fa6-brands:facebook" />
            </Link>
            <Link
                to="https://instagram.com/bloombrainmedia"
                className="cs-center"
            >
                <Icon icon="fa6-brands:instagram" />
            </Link>
            <Link
                to="https://youtube.com/bloombrainmedia"
                className="cs-center"
            >
                <Icon icon="fa6-brands:youtube" />
            </Link>
            <Link
                to="https://twitter.com/bloombrainmedia"
                className="cs-center"
            >
                <Icon icon="fa6-brands:twitter" />
            </Link>
        </Div>
    );
}
