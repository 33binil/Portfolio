import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        year: "2024 – Present",
        role: "Web Developer, Freelance Service",
        company: (
            <a
                href="https://pixeljunkiestudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
            >
                Pixel Junkie Creative Studio
                <span>→</span>
            </a>
        ),
        description:
            "Built responsive websites with React, Tailwind, and WordPress; designed user-focused UIs in Figma, optimized performance, and deployed via Git, Vercel, and Netlify. Delivered branding assets and landing pages to boost client presence."
    },
    {
        year: "2025",
        role: "Web Development Intern",
        company: "Nano Robotics Embed Technologies (NRET) - Bengaluru, India",
        description:
            "Built SEO-optimized websites with React, Tailwind, and WordPress. Designed user-friendly UIs in Figma, deployed with Git/Vercel/Netlify, and delivered branding assets with strategic landing pages."
    },
    {
        year: "NOW",
        role: "Freelance & Upskilling",
        company: "Freelance",
        description:
            "Worked as a freelancer for various clients, providing 3D and web services, while actively upskilling in multiple areas increasing my tech stack.",
    },
];

export default function Career() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("career-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const progress = Math.min(
                    Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
                    1
                );
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="career-section"
            className="relative w-full min-h-screen text-white px-8 md:px-20 py-32"
        >
            {/* Heading */}
            <div className="text-center mb-44">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                    My career & <br />
                    <span className="bg-gradient-to-b from-white to-purple-600 bg-clip-text text-transparent">
            experience
          </span>
                </h2>
            </div>

            {/* Timeline Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                {/* Left Column - Roles */}
                <div className="relative flex left-44 flex-col gap-36">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: scrollProgress > i * 0.25 ? 1 : 0,
                                y: scrollProgress > i * 0.25 ? 0 : 50,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-4xl font-bold">{exp.role}</h3>
                            <p className="text-purple-400">{exp.company}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Middle Column - Timeline */}
                <div className="relative flex justify-center">
                    {/* Gradient Timeline Line */}
                    <div
                        className="absolute top-0 w-[3px] bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"
                        style={{ height: `${scrollProgress * 100}%` }}
                    ></div>

                    {/* Glowing Circle */}
                    <div
                        className="absolute w-6 h-6 rounded-full bg-purple-500 animate-pulse"
                        style={{
                            top: `${scrollProgress * 100}%`,
                            transform: "translateY(-50%)",
                            boxShadow:
                                "0 0 20px rgba(168,85,247,0.9), 0 0 40px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.4)",
                        }}
                    ></div>
                </div>

                {/* Right Column - Descriptions */}
                <div className="relative left-[-90px] text-lg flex flex-col gap-24">
                    {experiences.map((exp, i) => (
                        <motion.p
                            key={i}
                            className="text-gray-300 max-w-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: scrollProgress > i * 0.25 ? 1 : 0,
                                y: scrollProgress > i * 0.25 ? 0 : 50,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            {exp.description}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
