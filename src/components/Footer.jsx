import React from 'react';

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-logo">SK</span>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/stacy-kamau-753148267/" target="_blank" className="contact-details" rel="noopener" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/stacy-wk" target="_blank" className="contact-details" rel="noopener" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:softwaredevstacy@gmail.com" className="contact-details" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/254798806156" target="_blank" className="contact-details" rel="noopener" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                <div className="footer-right">
                    <p>&copy; 2025 Stacy Kamau</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;