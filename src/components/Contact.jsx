// eslint-disable-next-line no-unused-vars
import React from "react";
import WeatherWidget from "./Weather_Widget";
import FormValidation from "./Form";

const Contact = () => (
  <section id="contact" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>Contact Information</h2>
        <p className="mb-5">
          For business inquiries contact me via the form or LinkedIn.
          <a
            href="https://www.linkedin.com/in/dennis-bircan-a43bb2135/"
            target="_blank"
            className="text-dark mx-2"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </p>
        {/* Map */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2045.9956095767864!2d18.1394878774057!3d59.14920242542576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7ca209c6f24f%3A0xa620ddb59c11a156!2sKrogt%C3%A4ppan%20136%2C%20136%2053%20Jordbro!5e0!3m2!1ssv!2sse!4v1732904457338!5m2!1ssv!2sse"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Weather */}
        <WeatherWidget /> {WeatherWidget}
      </article>
      <article className="col-md-6 col-12">
        <h2>Contact Form</h2>
        <FormValidation /> {FormValidation}
      </article>
    </div>
  </section>
);

export default Contact;
