import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WhatIDo() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const items = [
        {
            title: "WEB DEVELOPMENT",
            description:
                "I build responsive, scalable, and interactive web applications with a focus on clean code and seamless user experience. I combine frontend and backend expertise to deliver complete, modern web solutions.",
            skills: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST APIs",
                "Git & GitHub",
                "Responsive Design",
            ],
        },
        {
            title: "UI/UX DESIGN",
            description:
                "I create intuitive and visually appealing digital experiences, focusing on user-centered design principles. From wireframing and prototyping to interactive interfaces, I ensure every design is responsive, accessible, and engaging.",
            skills: [
                "User Research",
                "Interaction Design",
                "Visual Design",
                "Responsive Design",
                "Figma",
                "Tailwind CSS",
                "React UI Implementation",
            ],
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-16 px-6 sm:px-10 py-20">
            {/* LEFT SIDE — TITLE */}
            <div
                className="relative md:left-64"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-out-cubic"
            >
                <h2 className="relative font-sans font-bold text-6xl sm:text-7xl lg:text-8xl leading-tight">
                    WHAT
                    <div>
                        I<span className="font-bold text-[#c2a4ff]"> DO</span>
                    </div>
                </h2>
            </div>


            {/* RIGHT SIDE — BOXES */}
            <div className="relative md:left-[-400px] flex flex-col md:top-[-100px] gap-8 w-full max-w-[500px]">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`
              relative border-2 border-dashed border-white w-full p-6
              transition-all duration-500 ease-in-out cursor-pointer
              ${hoverIndex === i ? "h-[400px]" : "h-[220px]"}
              flex flex-col justify-between
            `}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <h4 className="text-lg mt-2">Description</h4>
                            <p className="text-sm mt-1">{item.description}</p>
                        </div>

                        {/* Skillset (animated) */}
                        <div
                            className={`
                transform transition-all duration-500 ease-in-out overflow-hidden
                ${hoverIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
                        >
                            <h5 className="mt-4 font-semibold">Skillset & Tools</h5>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-2 py-1 text-xs border border-white rounded"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
