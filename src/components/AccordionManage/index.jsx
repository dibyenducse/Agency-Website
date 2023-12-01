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
            question: 'What is Social Media Management?',
            answer: "Social Media Management involves the strategic handling of a brand's social media channels. It includes content creation, posting schedules, engagement with the audience, and overall maintenance to enhance the brand's online presence.",
        },
        {
            question:
                'Why is Social Media Management important for my business?',
            answer: 'Social Media Management is crucial for building brand awareness, engaging with your audience, and fostering a community around your brand. It helps in maintaining a consistent and positive online presence.',
        },
        {
            question: 'What platforms do you manage?',
            answer: 'We manage a variety of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, and Pinterest. Our approach is tailored to your business goals and the platforms most relevant to your audience.',
        },
        {
            question: 'How do you create content for social media?',
            answer: 'Our content creation process involves understanding your brand identity, researching your industry, and crafting visually appealing and engaging content. We develop a content calendar to ensure a consistent flow of posts.',
        },
        {
            question: 'How do you engage with our audience on social media?',
            answer: 'Engagement is a priority. We respond to comments, messages, and actively participate in relevant conversations. Our goal is to foster a community, increase brand loyalty, and encourage audience interaction.',
        },
        {
            question:
                'How do you measure the success of Social Media Management?',
            answer: 'We use a combination of key performance indicators (KPIs) such as engagement rates, follower growth, and conversion tracking to measure the success of our Social Media Management services. Regular analytics reports are provided for your review.',
        },
        {
            question:
                'Can I customize the Social Media Management plan to fit my business needs?',
            answer: 'Absolutely! Our Social Media Management plans are flexible and can be customized to align with your business goals, target audience, and budget. We work closely with you to create a tailored strategy.',
        },
        {
            question:
                'How often will I receive updates on my social media performance?',
            answer: 'We provide monthly analytics reports that detail the performance of your social media accounts. These reports include insights into key metrics, audience demographics, and the effectiveness of our strategies.',
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
