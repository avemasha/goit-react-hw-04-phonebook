import React from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import  './ContactsList.css'

export const ContactsList = ({ states, deleteContact }) =>  { 
    return(
          <ul> {
            
      states.map (state  => {
        return (
         
            <li key={nanoid()}  >
              {`${state.name}: ${state.number}`}
              <button type="button" className="deleteBtn"
              onClick={() => deleteContact(state.id)}
               >Delete</button>
            </li> 
           )})
         } </ul>
        )

}




ContactsList.propTypes = {
  states: PropTypes.array.isRequired,
  
};
