import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1 || formData.guests > 10) newErrors.guests = 'Guests must be between 1 and 10';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  if (submitted) {
    return <p role="alert">Thank you! Your table is booked.</p>;
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-required="true" />
      {errors.name && <span role="alert">{errors.name}</span>}

      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-required="true" />
      {errors.email && <span role="alert">{errors.email}</span>}

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} aria-required="true" />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" value={formData.time} onChange={handleChange} aria-required="true" />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Guests:</label>
      <input id="guests" name="guests" type="number" value={formData.guests} onChange={handleChange} aria-required="true" />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
