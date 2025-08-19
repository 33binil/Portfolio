import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        id: "01",
        title: "Pixel Junkie Creative Studio",
        role: "Web design and development",
        tools: "React, Tailwind CSS, Figma",
        img: "https://raw.githubusercontent.com/33binil/Portfolio-Website/main/public/img/pixeljunkie.png",
        link: "https://pixeljunkiestudio.in",
    },
    {
        id: "02",
        title: "Internship Project",
        role: "Web development",
        tools: "HTML, CSS, ",
        img: "https://raw.githubusercontent.com/33binil/Portfolio-Website/main/public/img/internship.png",
        link: "https://front-end-website-1.vercel.app/",
    },
    {
        id: "03",
        title: "Blood Bank Donation Management System",
        role: "College Project",
        tools: "PHP, Javascript, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio-Website/main/public/img/BBDMS.jpg",
    },
    {
        id: "04",
        title: "Weather App",
        role: "Web Project",
        tools: "Javascript, HTML, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio-Website/main/public/img/weather.png",
        link: "https://weather-app-coral-seven-64.vercel.app/",
    },
    {
        id: "05",
        title: "QR Code Generator",
        role: "Web Project",
        tools: "Javascript, HTML, CSS",
        img: "https://raw.githubusercontent.com/33binil/Portfolio-Website/main/public/img/QR.png",
        link: "https://qr-generator-beta-dusky.vercel.app/",
    },
];

const Showcase = () => {
    const [activeId, setActiveId] = useState(null);

    React.useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className="w-full py-10 px-6 bg-transparent">
            {/* Animated Heading */}
            <div className="text-center mb-24">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text"
                >
          <span
              style={{
                  color: "#6366f1",
                  backgroundImage:
                      "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
              }}
          >
            My Works
          </span>
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
                >
                    A collection of my featured projects showcasing design & development.
                </p>
            </div>

            {/* Projects Showcase */}
            <div className="flex justify-center w-full max-w-7xl mx-auto h-[400px] space-x-4">
                {projects.map((project) => {
                    const isActive = activeId === project.id;
                    const isAnyActive = activeId !== null;

                    return (
                        <div
                            key={project.id}
                            onMouseEnter={() => setActiveId(project.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onClick={() => window.open(project.link, "_blank")} // redirect on click
                            style={{
                                flex: isActive ? 3 : isAnyActive ? 0.8 : 1,
                                transition: "flex 0.6s ease-in-out",
                                backgroundImage: `url(${project.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                                    isActive ? "bg-opacity-50" : "bg-opacity-50"
                                }`}
                            />

                            {/* Content */}
                            <div
                                className={`absolute bottom-0 w-full p-4 text-center text-white transition-all duration-500 ${
                                    isActive
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                            >
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-gray-200">{project.role}</p>
                                <p className="text-sm text-gray-300 mt-2">{project.tools}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Showcase;
