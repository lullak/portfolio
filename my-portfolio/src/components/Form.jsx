import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, phone, email, message } = formData;

    if (!name) return "Enter your name.";
    if (!/^\+?\d{10,15}$/.test(phone)) return "Enter your phone number, country code with + can be included.";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return "Enter a valid email address.";
    if (!message) return "Message must be filled out.";

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
      }
      
    setError('');
    setFormData({ name: '', phone: '', email: '', message: '' });
      
    e.target.submit();
  };

  return (
    <form
      name="contactForm"
      action="https://formshow.systementor.se/"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange}
        />
        
        <input
          type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange}
        />
        
        <input
          type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}
        />
        
        <textarea
          name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} rows={10}
        />
        
        {error && <div style={{ color: 'red' }}>{error}</div>}
        
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormValidation;
