import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, firstName, lastName, email } = this.state;
    this.props.onAddRecord({ id, firstName, lastName, email });
    this.setState({ id: '', firstName: '', lastName: '', email: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-control p-5'>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={this.state.id}
          onChange={this.handleChange}
          className='form-control mb-3'
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
          className='form-control mb-3'
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
          className='form-control mb-3'
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          className='form-control mb-3'
          required
        />
        <button type="submit" className='btn btn-dark'>Submit</button>
      </form>
    );
  }
}

export default Form;
