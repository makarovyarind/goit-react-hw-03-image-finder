import PropTypes from 'prop-types';
import './Modal.css';
import React, { Component } from 'react';

export class Modal extends Component {

  componentDidMount () {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }
    render() {
      return (
        <div className="Overlay" onClick={this.onOverlayClose}>
          <div className="Modal">
        <img src={this.props.selectedImage.largeImageURL} alt={this.props.selectedImage.tags} />
      </div>
    </div>
        )
    }
    
}

Modal.propTypes = {
  selectedImage: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};