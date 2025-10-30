import React from 'react';

function About() {
    return(
        <section id="about">
            <h1>About Me</h1>
            <p>
                I'm a Full-Stack Software Developer based in Nairobi, Kenya.
            </p> <br />

            <p>
                I enjoy building responsive, user-friendly websites using HTML, CSS, JavaScript, and React. I’m also expanding my skills in backend development to become a well-rounded full stack developer.
            </p> <br />

            <p>
                I value clean code, thoughtful design, and continuous learning. I'm passionate about tech that is both 
                functional and visually impactful.
            </p>
            <button
              className="cv-download-btn" 
                id="download-cv" 
                type="button"
                onClick={() => window.open('/STACYWKAMAU-CV.pdf', '_blank')}>
                    Download My CV Here
            </button>
        </section>

    )
}

export default About;