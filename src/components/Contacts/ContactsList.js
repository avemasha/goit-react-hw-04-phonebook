import React from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import  './ContactsList.css'

export const ContactsList = ({ contacts, onDeleteContact }) =>  { 
    return(
          <ul> {
            
      contacts.map (({ id, name, number })  => {
        return (
         
            <li key={nanoid()}  >
              {`${name}: ${number}`}
              <button type="button" className="deleteBtn"
              onClick={() => onDeleteContact(id)}
               >Delete</button>
            </li> 
           )})
         } </ul>
        )

}




ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  
};
