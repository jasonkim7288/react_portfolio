import React from 'react';

import BigWords from './BigWords';

function Contact() {
  return (
    <main>
      <BigWords bigWord="Mail" midWord="me"/>
      <div className="container">
        <article className="article-one-column">
          <h1 className="text-title">I love to hear from you!</h1>
          <form action="https://usebasin.com/f/2baf2f29f508" method="POST">
            <div className="contact-wrapper">
              <div className="contact-icon">
                <i className="fas fa-user"></i>
              </div>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="contact-wrapper">
              <div className="contact-icon">
                <i className="fas fa-at"></i>
              </div>
              <input type="email" id="email" name="email" placeholder="Your email address" required />
            </div>
            <div className="contact-wrapper">
              <div className="contact-icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <textarea id="message" name="message" placeholder="Your message" required></textarea>
            </div>
            <div className="contact-wrapper contact-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </article>
      </div>

    </main>
  );
}

export default Contact;
