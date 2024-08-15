// src/components/Contacts/ContactList.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducers';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Contact } from '../../types/contacts';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);

  const openForm = (contact?: Contact) => {
    setContactToEdit(contact || null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setContactToEdit(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <Link to="/">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Charts and Maps
          </button>
        </Link>
        <button
          onClick={() => openForm()}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Contact
        </button>
      </div>
      {isFormOpen && <ContactForm contactToEdit={contactToEdit} onClose={closeForm} />}
      <div>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onEdit={openForm} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
