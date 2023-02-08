import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailSender.css'

export default function EmailSender() {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_bpbeapr', 'template_pa7xjz9', form.current, 'HGl6qsDZH-bh_lr82')
        .then(
          (result) => {
            setShowModal(true);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <>
        <form ref={form} onSubmit={sendEmail} className="EmailForm">
          <label>Your Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h1>Your Response Was Successfully Sent</h1>
              <p>Thank You.</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  }