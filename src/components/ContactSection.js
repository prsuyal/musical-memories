import React, { useState } from 'react';
import { render } from '@react-email/render';
import { sendEmail } from '@react-email/send';
import ContactEmailTemplate from './emails/ContactEmailTemplate';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    purpose: 'say_hi',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailHtml = render(<ContactEmailTemplate {...formData} />);
      await sendEmail({
        from: 'contact@yourdomain.com',
        to: 'musicalmemories2023@gmail.com',
        subject: `New ${formData.purpose === 'say_hi' ? 'Greeting' : 'Question'} from ${formData.name}`,
        html: emailHtml,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', purpose: 'say_hi' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs for name, email, message, and purpose */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus && (
        <p>{submitStatus === 'success' ? 'Message sent successfully!' : 'Error sending message.'}</p>
      )}
    </form>
  );
};

export default ContactSection;
