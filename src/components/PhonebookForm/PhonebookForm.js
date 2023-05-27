import React, {Component} from "react";
import PropTypes from 'prop-types';
import './PhonebookForm.css'

class PhonebookForm extends Component {

    state = {
       
        name: '',
        number: ''
      }
    
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        let contactToAdd = { name: this.state.name, number: this.state.number };
         this.props.onSubmit(contactToAdd);
          this.setState({name: '', number: ''})
       
      }


      onChange = e => {
        
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value, });
       
      }
    
  

render () {

  return (
        <form onSubmit={this.handleSubmit} >
            <label>Name
            <input
            id="input"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  placeholder="Enter name"
  onChange={this.onChange}
  value={this.state.name}
/>
            </label>
       <label>Number
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  onChange={this.onChange}
  value = {this.state.number}
  placeholder ="Enter number"
  required
/>
        </label>
        <button type="submit">Add contact</button>
        </form>
        
    )
 }
}


export default PhonebookForm;


PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
