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
            question: 'What is Social Media Video Editing?',
            answer: 'Social Media Video Editing involves the skillful crafting and enhancement of video content specifically tailored for various social media platforms. It includes trimming, adding effects, and optimizing videos to captivate your audience and elevate your online presence.',
        },
        {
            question:
                'Why is Social Media Video Editing important for my content strategy?',
            answer: 'Social Media Video Editing is crucial for capturing attention in the fast-paced world of social media. Well-edited videos enhance viewer engagement, convey your message effectively, and contribute to the overall visual appeal of your brand.',
        },
        {
            question:
                'Which social media platforms do you specialize in for video editing?',
            answer: "We specialize in video editing for a range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, and TikTok. Our expertise ensures that your videos are optimized for each platform's unique requirements.",
        },
        {
            question:
                'How do you approach video content creation for social media?',
            answer: 'Our video content creation process begins with understanding your brand identity and goals. We tailor visuals to match your style, utilize trending features, and employ creative editing techniques to produce engaging videos that resonate with your audience.',
        },
        {
            question:
                'How can you ensure my videos stand out on crowded social media feeds?',
            answer: "We employ attention-grabbing editing techniques, use eye-catching visuals, and stay updated on current trends. Our goal is to make your videos visually distinctive, ensuring they capture the audience's interest amidst the sea of content on social media.",
        },
        {
            question:
                'What metrics do you use to measure the success of Social Media Video Editing?',
            answer: 'We utilize key performance indicators (KPIs) such as video views, engagement rates, and audience retention to measure the success of our Social Media Video Editing services. Regular analytics reports are provided, offering insights into your video performance.',
        },
        {
            question:
                'Can I customize the Social Media Video Editing plan to suit my content needs?',
            answer: "Absolutely! Our Social Media Video Editing plans are flexible and can be customized to align with your brand's tone, target audience, and content goals. We collaborate closely with you to ensure the videos reflect your unique identity.",
        },
        {
            question:
                'How often will I receive updates on the performance of my edited videos?',
            answer: 'We provide regular updates on the performance of your edited videos through analytics reports. These reports include detailed insights into key metrics, viewer demographics, and the effectiveness of our video editing strategies.',
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
