import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';
import { AiOutlineSearch } from "react-icons/ai";

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      alert('enter the name you are looking for');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <AiOutlineSearch style={{ width: '25px', position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)' }} size='28px' />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  };
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};