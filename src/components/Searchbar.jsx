import React from "react";
import axios from 'axios';

const API_KEY = `45694916-26d3469d9465de46d8eb67fae`;
axios.default.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

//async function onSubmit() {
  //  const response = await axios.get(`/search?query=cats`);
    //console.log(`Response-ul va fi:`, response);

    //return response.data.hits;
//}
//import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
    return (
    <header>
        <form>
            <button onSubmit={onSubmit} type="submit">
                <span class="button-label">Search</span>
            </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
};

//Searchbar.propTypes = {
//    onSubmit: PropTypes.func.isRequired,
//};

export default Searchbar;