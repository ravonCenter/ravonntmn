import React from 'react';
import ContactFormHandler from './Contact_form';

export default function ContactForm() {
  const Schools = Array.from({ length: 150 }, (_, i) => i + 1);
  const Classes = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <ContactFormHandler/>
    </div>
  );
}


