// src/JobApplicationForm.js
import React, { useState } from 'react';
import './JobApplicationForm.css'; // Import the CSS file

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.resume) {
            setMessage('Please fill out all required fields.');
            return;
        }

        // Simulate form submission (you could send this data to a server here)
        console.log(formData);

        // Show success message
        setMessage('Application submitted successfully!');
        
        // Clear form fields
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            resume: ''
        });
    };

    return (
        <div className="container">
            <h1>Job Application Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label htmlFor="resume">Resume:</label>
                <textarea
                    id="resume"
                    name="resume"
                    rows="5"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit Application</button>
            </form>
            <div id="message">{message}</div>
        </div>
    );
};

export default JobApplicationForm;
