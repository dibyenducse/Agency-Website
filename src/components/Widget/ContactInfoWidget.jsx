import React from 'react';
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
    return (
        <>
            {title && <h2 className="cs-widget_title">{title}</h2>}
            <ul className="cs-menu_widget cs-style1 cs-mp0">
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="material-symbols:add-call-rounded" />
                        </span>
                    ) : (
                        ''
                    )}
                    +1 (956) 762-9999
                </li>
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="mdi:envelope" />
                        </span>
                    ) : (
                        ''
                    )}
                    info@bloombrainmedia.com
                </li>
                <li>
                    {withIcon ? (
                        <span className="cs-accent_color">
                            <Icon icon="mdi:map-marker" />
                        </span>
                    ) : (
                        ''
                    )}
                    1607 W Schunior Street,
                    <br />
                    Edinburgh, Texas, 78541,
                    <br />
                    USA.
                </li>
            </ul>
        </>
    );
}
