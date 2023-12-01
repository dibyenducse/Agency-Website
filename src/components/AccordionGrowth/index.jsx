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
            question: 'What is Social Media Growth Services?',
            answer: "Social Media Growth Services involve strategic efforts to expand a brand's online presence, increase follower engagement, and enhance overall influence across various social media platforms.",
        },
        {
            question: ' Why is Social Media Growth important for businesses?',
            answer: 'Social Media Growth is crucial for businesses as it helps broaden their reach, build brand awareness, and engage with a larger and more targeted audience, ultimately driving business success.',
        },
        {
            question: 'How do you target the right audience for growth?',
            answer: 'We employ data-driven strategies to identify and target specific demographics, interests, and behaviors relevant to your brand, ensuring we attract the most engaged and relevant followers.',
        },
        {
            question: 'What techniques are used to boost engagement?',
            answer: 'We focus on fostering genuine interactions, encouraging user engagement through compelling content, community-building initiatives, and strategic use of hashtags to enhance visibility.',
        },
        {
            question: 'How do you optimize content for growth?',
            answer: 'Our content optimization involves refining existing content and creating new, engaging materials that resonate with your audience. We tailor content to align with current trends and audience preferences.',
        },
        {
            question:
                'Can Social Media Growth Services be customized for different platforms?',
            answer: 'Absolutely! We tailor our growth strategies to each social media platform, ensuring a cohesive yet platform-specific approach that optimizes growth opportunities.',
        },
        {
            question:
                'How is success measured in Social Media Growth Services?',
            answer: 'Success is measured through various key performance indicators (KPIs), including follower growth, engagement rates, reach, and overall impact. We provide detailed analytics reports for transparency.',
        },
        {
            question: 'What sets your Social Media Growth Services apart?',
            answer: 'Our services stand out due to our data-driven approach, commitment to organic growth, and the ability to adapt strategies based on real-time analytics and industry trends.',
        },
        {
            question:
                'How do you handle competitor analysis in Social Media Growth?',
            answer: 'We conduct thorough competitor analysis to stay informed about industry trends and competitor strategies. This insight informs our growth strategies, ensuring your brand remains competitive.',
        },
        {
            question: 'Can I expect consistent growth with your services?',
            answer: 'Yes, our Social Media Growth Services are designed for consistent and sustainable growth. We implement ongoing campaigns, adapt to changing dynamics, and ensure your brand remains on an upward trajectory.',
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
