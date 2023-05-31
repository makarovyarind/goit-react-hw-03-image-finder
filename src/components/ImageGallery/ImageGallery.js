import './ImageGallery.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
state = {
  searchName: null,
}
  

  render() {
    const { images } = this.props;

    return (
      <ul className="ImageGallery">
        {images.map(item => (
          <ImageGalleryItem
            key={item.id}
            imageUrl={item.webformatURL}
            alt={item.tags}
            onClick={() => this.props.onClick(item)}
          />
        ))}

      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};