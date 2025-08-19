import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WhatIDo() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const items = [
        {
            title: "DESIGN",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia aliquid laboriosam ducimus sit molestiae.",
            skills: [
                "Blender",
                "Zbrush",
                "UI Design",
                "Motion",
                "Rigging",
                "3D Animation",
                "Character Design",
                "Modelling",
            ],
        },
        {
            title: "DEVELOP",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia aliquid laboriosam ducimus sit molestiae.",
            skills: [
                "JavaScript",
                "TypeScript",
                "Three.js",
                "React",
                "CSS",
                "Node.js",
                "Next.js",
                "Express.js",
                "PHP",
                "MySQL",
            ],
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 px-10 py-20">
            {/* LEFT SIDE — TITLE */}
            <div
                className="relative left-64"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-out-cubic"
            >
                <h2 className="relative font-sans font-bold text-8xl leading-tight">
                    WHAT
                    <div>
                        I<span className="font-bold text-[#c2a4ff]"> DO</span>
                    </div>
                </h2>
            </div>


            {/* RIGHT SIDE — BOXES */}
            <div className="relative left-[-400px] flex flex-col top-[-100px] gap-8 w-full max-w-[500px]">
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
