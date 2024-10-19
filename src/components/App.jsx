import React from "react";
import ImageGallery from "./ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem";
import Searchbar from "./Searchbar";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ImageGallery/>
       <ImageGalleryItem/>
       <Searchbar/>
      React homework template
    </div>
  );
};
