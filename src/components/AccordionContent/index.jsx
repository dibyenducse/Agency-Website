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
            question: 'What is Creative Content Creating?',
            answer: "Creative Content Creating is the art of strategically crafting visually compelling and engaging content to convey a brand's message uniquely and captivate its audience.",
        },
        {
            question: 'Why is creative content crucial for a brand?',
            answer: 'Creative content sets a brand apart, leaving a memorable impression on the audience. It builds brand identity, communicates values, and fosters a connection with the target audience.',
        },
        {
            question: "How do you tailor content to a brand's identity?",
            answer: "We deeply understand the brand's essence, values, and goals. Our creative process involves customizing every visual element to align seamlessly with the brand's identity.",
        },
        {
            question: 'What types of content do you create?',
            answer: "We create a wide range of content, including eye-catching graphics, engaging videos, interactive multimedia, and any visual elements necessary to tell a brand's story effectively.",
        },
        {
            question:
                'How does creative content contribute to marketing campaigns?',
            answer: 'Creative content enhances marketing campaigns by capturing attention, increasing engagement, and making the brand message more memorable. It forms a vital component of successful marketing strategies.',
        },
        {
            question:
                'How do you stay updated with industry trends in content creation?',
            answer: 'We are committed to staying current with industry trends. Continuous learning, market research, and participation in creative communities help us adapt and incorporate the latest trends into our work.',
        },
        {
            question:
                "Can you provide examples of successful creative content campaigns you've executed?",
            answer: 'Certainly, we have a portfolio of successful campaigns across various industries. We can showcase examples that highlight our creativity, impact, and ability to align with diverse brand identities.',
        },
        {
            question:
                'How do you measure the success of a creative content campaign?',
            answer: 'Success is measured through various metrics such as engagement rates, audience reach, brand recall, and conversion rates. We provide detailed analytics to illustrate the impact of our creative content.',
        },
        {
            question:
                'How do you ensure consistency in visual language across different platforms?',
            answer: 'Consistency is a priority. We create a style guide and adapt visual elements to suit each platform while maintaining a cohesive brand identity for a consistent and recognizable presence.',
        },
        {
            question:
                'What sets your Creative Content Creating service apart from others?',
            answer: 'Our service stands out with its strategic approach, customized content tailored to each brand, adaptability to industry trends, and a commitment to delivering visually impactful storytelling that leaves a lasting impression.',
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
