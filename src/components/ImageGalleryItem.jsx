import React from 'react';
import PropTypes from 'prop-types';
//import styles from './FriendList.module.css';

const ImageGalleryItem = ({ image, onClick }) => (
    <li onClick={() => onClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );


ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;