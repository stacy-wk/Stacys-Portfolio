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


                {/* Empower Her Project */}
                <div className="project">
                    <img src="empawa-ha.jpg" alt="Empower Her" />
                    <h3>Empower Her</h3>
                    <p>
                        A sample landing page designed for a women and children empowerment NGO.
                    </p>
                    <a href="https://empower-her-six.vercel.app/" target="_blank" className="btn">View Project</a>
                </div>


                {/* StudentOrg Project */}
                <div className="project">
                    <img src="StudentOrg.jpg" alt="StudentOrg" />
                    <h3>StudentOrg</h3>
                    <p>
                        A full-stack web application designed to help students manage their academics, finances, mental well-being, and collaboration — all in one place.
                    </p>
                    <a href="https://github.com/stacy-wk/STUDENT-ORG" target="_blank" className="btn">View Project</a>
                </div>

                {/* SIC Project */}
                <div className="project">
                    <img src="sic.jpg" alt="SIC" />
                    <h3>Samsung Innovation Campus website</h3>
                    <p>
                        A full-stack web platform for a tech-campus program. It unifies four experiences in one system: a public website, an admin back office, a student LMS, and an instructor workspace.
                    </p>
                    <a href="https://sic.jhubafrica.com/" target="_blank" className="btn">View Project</a>
                </div>


                {/* GPS Project */}
                <div className="project">
                    <img src="" alt="GPSMobileApp" />
                    <h3>GPS Student Attendance Mobile App</h3>
                    <p>
                        A React Native (Expo) mobile app that uses real-time GPS geofencing to ensure students are physically present in the classroom before marking attendance. The app verifies the user's location against a predefined classroom radius, displays the day's scheduled unit, and only enables the attendance button when GPS verification passes. 
                    </p>
                    <a href="https://github.com/stacy-wk/gps-attendance-app" target="_blank" className="btn">View Project</a>
                </div>
                



            </div>
        </section>
    )
}

export default Projects;

