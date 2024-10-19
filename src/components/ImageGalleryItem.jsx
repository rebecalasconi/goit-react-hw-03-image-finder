import React from 'react';
//import PropTypes from 'prop-types';
//import styles from './FriendList.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li>
      <img src={webformatURL} alt={`text`} />
    </li>
  );
}

// PropTypes pentru FriendListItem
//ImageGalleryItem.propTypes = {
  //avatar: PropTypes.string.isRequired,
  //name: PropTypes.string.isRequired,
  //isOnline: PropTypes.bool.isRequired,
//};

export default ImageGalleryItem;