
import Header from "./Header/Header";
import { nanoid } from "nanoid";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import React, { useState, useEffect }  from "react";
import {PhonebookForm} from "./PhonebookForm/PhonebookForm";
import {ContactsList} from "./Contacts/ContactsList";
import FilterForm from './Filter/FilterForm';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {

  const [contacts, setContacts]=useState(()=>{
    return JSON.parse(localStorage.getItem('contacts')) && contactList;
  });
  
  useEffect(()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const [filter, setFilter]=useState('');
  
  const addContact = (name, number) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };
  
  
  if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),
  )) {
    alert(`${name} is already in contacts.`);
  } else if (contacts.find(contact => contact.number === number)) {
    alert(`${number} is already in contacts.`);
    }else {
    setContacts(state => state.concat(contact));
    };
  };
  
  const deleteContact = contactid => {
    setContacts(contacts.filter(({id}) => id !== contactid));
  };
    
 
  const changeFilter=evt=>{
    setFilter(evt.currentTarget.value);
  };
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  
 return (
      <div
        style={{
         
          display: 'flex',
          flexDirection: 'column' ,
          alignItems: 'flex-start',
          marginLeft: '30px'
          
        }}
      >
        <Header header="Phonebook"></Header>
        <PhonebookForm onSubmit={addContact} />
        <Header header="Contacts"></Header>
        <FilterForm  value={filter} onChange={changeFilter}/>
        <ContactsList   contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}/>
         </div>
     ) 
    };
  


