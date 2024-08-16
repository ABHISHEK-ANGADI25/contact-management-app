import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface type for Contact
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
}

// Interface type for ContactState
interface ContactsState {
  contacts: Contact[];
}

// Initialising the ContactState
const initialState: ContactsState = {
  contacts: [],
};

// Creating a reducer-slice for the contactsSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index >= 0) state.contacts[index] = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer; // exporting the reducer-slice
