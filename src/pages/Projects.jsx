import React from 'react';
import CardProjects from '../components/CardProjects';  // Import the CardProjects component

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Main Content Section */}
            <main className="flex-grow">
                <section className="p-6 text-center text-gray-700 dark:text-gray-300">
                    <h1 className="text-3xl font-bold mb-4">My Projects</h1>
                    <p className="text-lg mb-8">Explore some of the exciting projects I've worked on.</p>

                    {/* Card Projects Component */}
                    <CardProjects />
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-white dark:bg-gray-900 w-full text-center">
                <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6" />
                <span className="block text-sm pb-4 text-gray-500 dark:text-gray-400">
          © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
            EkiZR™
          </a>. All Rights Reserved.
        </span>
            </footer>
        </div>
    );
};

export default Projects;
