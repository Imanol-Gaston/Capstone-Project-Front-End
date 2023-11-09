import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us with any questions or inquiries.</p>
        <ul>
          <li>Email: sitework@gmail.com</li>
          <li>Action Radius: Bilbao, San Sebastian, Santander, Vitoria, Burgos,
             Pamplona and surrounders <br/> We are working on increasing our 
             inspectors database in order to arrive to every places in the world</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
