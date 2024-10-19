import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
//import PropTypes from 'prop-types';
//import styles from './App.module.css'

const ImageGallery = ({ cards }) => {
    return (
        <ul>
        {cards.map(card => (
          <ImageGalleryItem
            key={card.id}
          />
        ))}
      </ul>
    )
};
    


//ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
 //   number: PropTypes.string.isRequired,
 //   };

export default ImageGallery;