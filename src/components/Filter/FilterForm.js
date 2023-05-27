import React from "react";
import './Filter.css'
import PropTypes from 'prop-types';

const FilterForm = ({setFilterValue, filter}) => {
   return (
              <div>
                <h4>Find contacts by name</h4>
                <input placeholder="Enter contact name" filter = {filter} onChange={setFilterValue}></input>
                
              </div>
            );
          }
    


    export default FilterForm;

    FilterForm.propTypes = {
      filter: PropTypes.string.isRequired,
     };