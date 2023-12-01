import React from 'react';
import { useState } from 'react';
import Div from '../Div';

export default function Accordion() {
    const [selected, setSelected] = useState(0);
    const handelToggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };
    const accordionData = [
        {
            question: 'What is a Social Ad Campaign?',
            answer: 'A Social Ad Campaign is a targeted and strategic approach to advertising on social media platforms, aiming to reach specific audiences with compelling ad content to achieve business objectives.',
        },
        {
            question: 'Why is a Social Ad Campaign important for businesses?',
            answer: 'Social Ad Campaigns are essential for businesses as they provide a direct and effective way to reach a targeted audience, increase brand awareness, drive engagement, and achieve specific marketing goals.',
        },
        {
            question:
                'How do you determine the target audience for a Social Ad Campaign?',
            answer: 'We use a combination of demographic data, user behavior analysis, and audience insights provided by social media platforms to precisely identify and target the audience most relevant to your brand.',
        },
        {
            question:
                'What types of ad content do you create for social media campaigns?',
            answer: 'We create a variety of ad content, including eye-catching visuals, persuasive ad copy, and compelling multimedia, tailored to the specific goals and requirements of each campaign.',
        },
        {
            question: 'How do you measure the success of a Social Ad Campaign?',
            answer: 'Success is measured through key performance indicators (KPIs) such as click-through rates, conversions, engagement, and return on ad spend (ROAS). We provide detailed analytics reports for evaluation.',
        },
        {
            question: 'How is the budget allocated in a Social Ad Campaign?',
            answer: 'Budget allocation is strategic, considering factors like campaign objectives, target audience, and platform dynamics. We optimize spending to ensure maximum impact and cost-effectiveness.',
        },
        {
            question:
                'Can you explain the A/B testing process in Social Ad Campaigns?',
            answer: 'A/B testing involves running variations of ads to compare their performance. We analyze factors like ad copy, visuals, and targeting to determine which elements resonate most effectively with the audience.',
        },
        {
            question:
                'How do you stay updated with changes in social media algorithms for ad placements?',
            answer: 'We stay informed about changes in social media algorithms through continuous monitoring, industry updates, and engagement with social media communities. This ensures our campaigns adapt to platform dynamics.',
        },
        {
            question:
                'What makes a Social Ad Campaign stand out from traditional advertising?',
            answer: 'Social Ad Campaigns offer targeted reach, real-time engagement, and precise audience analytics, making them more interactive, measurable, and adaptable compared to traditional advertising methods.',
        },
        {
            question:
                'Can a Social Ad Campaign be customized to fit different business objectives?',
            answer: "Absolutely! We tailor Social Ad Campaigns to align with specific business objectives, whether it's increasing brand awareness, driving website traffic, generating leads, or promoting product sales.",
        },
    ];
    return (
        <Div className="cs-accordians cs-style1">
            {accordionData.map((item, index) => (
                <Div
                    className={`cs-accordian ${
                        selected === index ? 'active' : ''
                    }`}
                    key={index}
                >
                    <Div
                        className="cs-accordian_head"
                        onClick={() => handelToggle(index)}
                    >
                        <h2 className="cs-accordian_title">{item.question}</h2>
                        <span className="cs-accordian_toggle cs-accent_color">
                            <svg
                                width={15}
                                height={8}
                                viewBox="0 0 15 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 0L7.5 7.5L15 0H0Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </Div>
                    <Div className="cs-accordian_body">
                        <Div className="cs-accordian_body_in">
                            {item.answer}
                        </Div>
                    </Div>
                </Div>
            ))}
        </Div>
    );
}
