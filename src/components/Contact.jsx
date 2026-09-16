import React, {useState} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSent, setIsSent] = useState(false);

    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'stacywaithera222',
            'template_xoemgzn',
            { ...formData, to_email: "softwaredevstacy@gmail.com" },
            'qnwX6zarA5-gAdkY3'
        ).then(() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
        }, (error) => {
            alert("Oops! Something went wrong, please try again.");
            console.error(error);
        });
    };

    return(
        <section id="contact">
            <h1>Contact Me</h1>
            <div className="contact-intro">
                <p>
                    Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.
                </p>
            </div>

            <div className="contact-availability">
                <span className="pulse-dot"></span>
                Available for opportunities
            </div>

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" disabled={isSent} className={isSent ? 'sent' : ''}>
                    <span>{isSent ? "Sent" : "Send Message"}</span>
                    <i className={isSent ? "fas fa-check" : "fas fa-paper-plane"}></i>
                </button>
            </form>
        </section>
    )
}

export default Contact;