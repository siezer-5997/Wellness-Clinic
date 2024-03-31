import React, { useState } from 'react';
import './Style/Contact.css'; // Make sure to create and link the Contact.css file

function Contact() {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement submission functionality here
        console.log(`Customer Name: ${customerName}`);
        console.log(`Customer Email: ${customerEmail}`);
        console.log(`Message: ${message}`);
        // Clear the form fields after submission
        setCustomerName('');
        setCustomerEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>If you have any questions, please feel free to reach out to us.</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> info@wellnessclinic.com</p>
                <p><strong>Address:</strong> 123 Wellness Street, Healthy City, HC 12345</p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="customerName">Name:</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                    <label htmlFor="customerEmail">Email:</label>
                    <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
