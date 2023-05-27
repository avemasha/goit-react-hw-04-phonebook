import React, {useState} from "react";
import PropTypes from 'prop-types';
import './PhonebookForm.css'
import { nanoid } from "nanoid";





export const PhonebookForm  = ({onSubmit}) => {

  const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = evt => {
  const { name, value } = evt.target;
  switch (name) {
    case 'name':
     setName(value);
     break;

    case 'number':
     setNumber(value);
     break;

    default:
     return;   
    }
};

const handleSubmit = evt => {
 evt.preventDefault();
 onSubmit(name, number);
 resetInput();
};

const resetInput = () => {
  setName(''); 
  setNumber('');
};
    
  



  return (
        <form onSubmit={handleSubmit} >
            <label>Name
            <input
            id="input"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  placeholder="Enter name"
  onChange={handleChange} 
/>
            </label>
       <label>Number
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  onChange={handleChange} 
  placeholder ="Enter number"
  required
/>
        </label>
        <button type="submit">Add contact</button>
        </form>
        
    )
 }



export default PhonebookForm;


PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
