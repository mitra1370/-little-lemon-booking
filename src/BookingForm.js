import React, { useState } from "react";

function BookingForm({ onConfirm }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.guests || formData.guests < 1)
      newErrors.guests = "At least one guest required";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onConfirm(formData);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} aria-required="true" />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        {errors.date && <span className="error">{errors.date}</span>}
      </label>

      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        {errors.time && <span className="error">{errors.time}</span>}
      </label>

      <label>
        Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} />
        {errors.guests && <span className="error">{errors.guests}</span>}
      </label>

      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
