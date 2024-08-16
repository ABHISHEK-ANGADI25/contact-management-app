// src/components/Contacts/ContactForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../redux/slices/contactsSlices';
import { Contact } from '../../types/contacts';

// Type for ContactForm
interface ContactFormProps {
  contactToEdit?: Contact | null;
  onClose: () => void;
}

// Functional Component for ContactForm
const ContactForm: React.FC<ContactFormProps> = ({ contactToEdit, onClose }) => {
  const [firstName, setFirstName] = useState(contactToEdit?.firstName || '');
  const [lastName, setLastName] = useState(contactToEdit?.lastName || '');
  const [email, setEmail] = useState(contactToEdit?.email || '');
  const [phone, setPhone] = useState(contactToEdit?.phone || '');
  const [status, setStatus] = useState(contactToEdit?.status || '');
  
  const dispatch = useDispatch();

  // Submit function for adding the data into tables
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const contact: Contact = {
      id: contactToEdit ? contactToEdit.id : Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      status,
    };

    if (contactToEdit) {
      dispatch(updateContact(contact)); // Submit Button will change to Update
    } else {
      dispatch(addContact(contact)); // Submit Button will change to Add New
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          className="mt-1 block border rounded"
          value={firstName}
          placeholder='Enter the Name here'
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          className="mt-1 block border rounded"
          value={lastName}
          placeholder='Enter the Name here'
          onChange={(e) => setLastName(e.target.value)}
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
      <div className="mb-4">
      <label className="mr-4">
            <input
              type="radio"
              name="status"
              value="Active"
              checked={status === 'Active'}
              onChange={(e) => setStatus(e.target.value)}
              className="mr-2"
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={status === 'Inactive'}
              onChange={(e) => setStatus(e.target.value)}
              className="mr-2"
            />
            Inactive
          </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {contactToEdit ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm; // exporting ContactForm
