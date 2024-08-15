// src/components/Contacts/ContactItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contactsSlices';
import { Contact } from '../../types/contacts';

interface ContactItemProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded mb-2 shadow-sm">
      <div>
        <h3 className="font-bold text-lg">{contact.firstName}{contact.lastName}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.status}</p>
      </div>
      <div>
        <button
          onClick={() => onEdit(contact)}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
