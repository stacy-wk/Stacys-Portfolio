import React from 'react';

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/stacy-kamau-753148267/" target="_blank" className="contact-details" rel="noopener">LinkedIn
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/stacy-wk" target="_blank" className="contact-details" rel="noopener">GitHub
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:kamaustacywaithera@gmail.com" className="contact-details">Email
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://wa.me/254798806156" target="_blank" className="contact-details" rel="noopener">WhatsApp
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <p>© 2025 Stacy Kamau</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;