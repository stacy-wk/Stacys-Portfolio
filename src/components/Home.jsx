import React from 'react';

function Home() {
    return(
        <section id="home">
          <div className="home-content">
            <div className="home-text">
              <h2>Hi, I'm Stacy Kamau</h2>
              <h3>Front-End Web Developer & Full-Stack Software Developer</h3>
            </div>

            <div className="home-image-container">
                <img src="portfolioimage.jpg" alt="Stacy" className="home-image" />
            </div>
          </div>
        </section>
    )
}

export default Home;
