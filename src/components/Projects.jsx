import React from 'react';

function Projects() {
    return(
        <section id="projects">
            <h1>Projects</h1>
            <h2 className="projects-section">Here are some of my projects:</h2>
            <br />
            <div className="projects-grid">

                {/* Weather Application Project */}
                <div className="project">
                    <img src="weatherapplication.jpg" alt="Weather App" />
                    <h3>Weather Application</h3>
                    <p>
                        Access real-time weather updates by entering any city. View key details like temperature, humidity, wind speed, conditions, and a five-day forecast.
                    </p>
                    <a href="https://weather-app-by-stacy.vercel.app/" target="_blank" className="btn">View Project</a>
                </div>
            

                {/* Palindrome Checker Project */}
                <div className="project">
                    <img src="palindromechecker.jpg" alt="Palindrome Checker" />
                    <h3>Palindrome Checker</h3>
                    <p>
                        Test words, phrases, or numbers to see if they read the same forward and backward. It’s a fun way to check symmetry in text. Check it out below!
                    </p>
                    <a href="https://palindrome-checker-phi-smoky.vercel.app/" target="_blank" className="btn">View Project</a>
                </div>


                {/* GreenFuture KE Project */}
                <div className="project">
                    <img src="green-future.jpg" alt="Green Future KE" />
                    <h3>GreenFuture KE</h3>
                    <p>
                        A modern climate action site designed to support environmental causes across East Africa.
                    </p>
                    <a href="https://climate-action-hazel.vercel.app/" target="_blank" className="btn">View Project</a>
                </div>


                {/* Empower Her Project */}
                <div className="project">
                    <img src="empowerher.jpg" alt="Empower Her" />
                    <h3>Empower Her</h3>
                    <p>
                        A landing page designed for a women and children empowerment organization.
                    </p>
                    <a href="https://empower-her-xi.vercel.app/" target="_blank" className="btn">View Project</a>
                </div>



            </div>
        </section>
    )
}

export default Projects;

