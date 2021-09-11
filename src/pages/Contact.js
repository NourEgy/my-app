import React, { useState } from 'react';
import Breadcrumb from "../Components/Breadcrumb"
import Footer from "../Components/footer"

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contact-us">

            <Breadcrumb title="Contact Us" />

            <div className="container">
                <form>
                        <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    
                    
                        <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                
            
            
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                
                        <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            

                        <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    
                
                        <button className="btn-two" type="submit">send message</button>

                </form>

                </div>
                <Footer />
        </div>
    );
};

export default ContactForm;
