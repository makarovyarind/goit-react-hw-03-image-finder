import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export function ImageGalleryItem ({ imageUrl, alt, onClick }) {
    return (
        <li className="ImageGalleryItem">
            <img className='ImageGalleryItemImage' src={imageUrl} alt={alt} onClick={onClick} />
          </li>
    );
};

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}