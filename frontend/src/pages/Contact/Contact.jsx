import React, { useState } from 'react';
import './Contact.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userMsg: ""
    });

    const [successMessage, setSuccessMessage] = useState(""); // 送信成功メッセージ

    async function handleForm(e) {
        e.preventDefault();
        let contactForm = {
            userName: formData.userName,
            userEmail: formData.userEmail,
            userMsg: formData.userMsg
        };

        try {
            await fetch(`http://localhost:3001/api/email/?userName=${contactForm.userName}&userEmail=${contactForm.userEmail}&userMsg=${contactForm.userMsg}`);
            
            setSuccessMessage("Sent successfully!");

            setFormData({
                userName: "",
                userEmail: "",
                userMsg: ""
            });

            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <Header />
            {/* contact form */}
            <div className="infoContainer">
                <div className="infoBox">
                    <div className="information">
                        <h2 id='ContactH' className="header2">Contact Us</h2>
                    </div>
                    <div className="startingContainer">
                        <p><i className="fa-solid fa-envelope"></i> Email: Petsandme2022*abc*@gmail.com</p>
                        <p>Please remove "*abc*" when sending an email.</p>
                    </div>
                    <h3 className="headerContact">Contact Form</h3>

                    {successMessage && <p className="success-message">{successMessage}</p>}

                    <form className="form" onSubmit={handleForm}>

                        <div className="nameInput">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                name="userName" 
                                id="name" 
                                className="input" 
                                required 
                                value={formData.userName} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="emailInput">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="userEmail" 
                                id="email" 
                                className="input" 
                                required 
                                value={formData.userEmail} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="msgInput">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message" 
                                name="userMsg" 
                                className="input" 
                                required 
                                value={formData.userMsg} 
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button className="btn2">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
