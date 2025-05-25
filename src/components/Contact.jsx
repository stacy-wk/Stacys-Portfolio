import React, {useState} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'stacywaithera222',    
            'template_xoemgzn',   
            formData,            
            'qnwX6zarA5-gAdkY3'       
        ).then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, (error) => {
            alert("Oops! Something went wrong, please try again.");
            console.error(error);
        });
    };

    return(
        <section id="contact">
            <h1>Contact Me</h1>
            <form id="contact-form">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" id="send-btn" onClick={handleSubmit}>Send
                    <i className="fas fa-paper-plane"></i>
                </button>
            </form>
        </section>
    )
}

export default Contact;