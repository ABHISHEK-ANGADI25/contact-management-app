// src/pages/ContactsPage.tsx
import React from 'react';
import ContactList from '../components/Contacts/ContactList';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ContactList />
    </div>
  );
};

export default ContactsPage;
