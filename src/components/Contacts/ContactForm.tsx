// src/components/Contacts/ContactForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../redux/slices/contactsSlices';
import { Contact } from '../../types/contacts';

interface ContactFormProps {
  contactToEdit?: Contact | null;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactToEdit, onClose }) => {
  const [name, setName] = useState(contactToEdit?.name || '');
  const [email, setEmail] = useState(contactToEdit?.email || '');
  const [phone, setPhone] = useState(contactToEdit?.phone || '');
  
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contact: Contact = {
      id: contactToEdit ? contactToEdit.id : Date.now().toString(),
      name,
      email,
      phone,
    };

    if (contactToEdit) {
      dispatch(updateContact(contact));
    } else {
      dispatch(addContact(contact));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block border rounded"
          value={name}
          placeholder='Enter the Name here'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block border rounded"
          value={email}
          placeholder='Enter the Email-Id'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          className="mt-1 block border rounded"
          value={phone}
          placeholder='Enter the Phone Number'
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {contactToEdit ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
