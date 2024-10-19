import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
//import PropTypes from 'prop-types';
//import styles from './App.module.css'

const ImageGallery = ({ images }) => {
    return (
        <ul>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.tags}
          />
        ))}
      </ul>
    )
};
    


//ImageGallery.propTypes = {
//   name: PropTypes.string.isRequired,
 //   number: PropTypes.string.isRequired,
 //   };

export default ImageGallery;