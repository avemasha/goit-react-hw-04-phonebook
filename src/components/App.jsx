import { nanoid } from 'nanoid'
import Header from "./Header/Header";

import React, { Component} from "react";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import {ContactsList} from "./Contacts/ContactsList";
import FilterForm from './Filter/FilterForm';


  class App extends Component {

    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter:'',
      
    }

    componentDidMount() {
     
      const contacts = localStorage.getItem("contacts");
      const parsedContacts = JSON.parse(contacts);
      
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
  
      if (this.state.contacts !== prevState.contacts) {
      
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      }
    }

     formSubmitHandler = data => {
    
  const isExist = this.state.contacts.find(cont => data === cont.name)

    if (isExist) { 
       return alert(' Контакт вже є у телефонній книзі!');
     }
   
       this.setState(prevState => {
        return {
           contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: data.name, number: data.number },
          ]
        }
        } );
    };
      

   

 
  
   setFilterToState = filterData => {
      this.setState({  filter: `${filterData}` });
    };

    
  filterArr = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
};

  setFilterValue = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
}
  
    deleteContact  = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };
 
  render () {
      
      const { contacts, filter } = this.state;
      const filteredContacts = this.filterArr(contacts, filter)

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
        <PhonebookForm onSubmit = {this.formSubmitHandler}     />
        <Header header="Contacts"></Header>
        <FilterForm  filter={filter} setFilterValue = {this.setFilterValue} setFilterToState={this.setFilterToState}/>
        <ContactsList  states={filteredContacts}    deleteContact={this.deleteContact}/>
         </div>
     ) 
    };
  }

export default App;
