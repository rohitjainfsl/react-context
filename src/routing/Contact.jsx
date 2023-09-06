import React from "react";

function Contact() {
  return (
    <div className="contact content">
      <h2>Contact</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Enter your Email" />
        </div>
        <div className="form-group">
          <textarea
            name=""
            placeholder="Enter your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
