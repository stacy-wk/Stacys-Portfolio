import React from 'react';

function About() {
    return(
        <section id="about">
            <h1>About Me</h1>

            <div className="about-intro">
                <span className="about-pin"><i className="fas fa-map-pin"></i> Nairobi, Kenya</span>
                <p>
                    I'm a <strong>Full-Stack Software Developer</strong> with a background in
                    <strong> Mathematics &amp; Computer Science</strong>, building web applications and software products end-to-end, from pixel-perfect frontends to dependable APIs and databases, and turning real-world user
                    needs into practical, working software.
                </p>
                <p>
                    I work across frontend and backend development, API integration and databases. I'm
                    always learning, currently diving into <strong>AI &amp; Machine Learning</strong> at the <strong>Samsung Innovation Campus</strong>.
                </p>
                <br></br>
            </div>

            <button
                className="cv-download-btn"
                id="download-cv"
                type="button"
                onClick={() => window.open('/STACYWK-RESUME-.pdf', '_blank')}>
                    Download My CV <i className="fas fa-download"></i>
            </button>
            <br></br>
            <br></br>
            <br></br>
        </section>
    )
}

export default About;