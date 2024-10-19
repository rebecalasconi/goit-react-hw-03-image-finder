import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from 'prop-types';
//import styles from './App.module.css'

const ImageGallery = ({ images, onImageClick }) => (
        <ul>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onImageClick}
          />
        ))}
      </ul>
    );
    


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;