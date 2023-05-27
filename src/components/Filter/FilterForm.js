import React from "react";
import './Filter.css'
import PropTypes from 'prop-types';

const FilterForm = ({ value, onChange }) => {
   return (
              <div>
                <h4>Find contacts by name</h4>
                <input placeholder="Enter contact name"    value={value}
                onChange={onChange}></input>
                
              </div>
            );
          }
    


    export default FilterForm;

    FilterForm.propTypes = {
      value: PropTypes.string.isRequired,
     };