import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Hourglass } from 'react-loader-spinner'
import Button from './Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            images: [],
            page: 1,
            totalHits: 0,
            isLoading: false
        };
    }

    // Funcția care gestionează submit-ul din Searchbar
    handleSearchSubmit = (term) => {
        this.setState({ searchTerm: term, images: [], page: 1 }, this.fetchImages);
    };

    // Funcția pentru a căuta imagini folosind API-ul
    fetchImages = async () => {
        const { searchTerm, page } = this.state;
        if (!searchTerm) return;

        try {
          this.setState({ isLoading: true });
            const response = await axios.get(`https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=45694916-26d3469d9465de46d8eb67fae&image_type=photo&orientation=horizontal&per_page=12`);
            this.setState((prevState) => ({
                images: [...prevState.images, ...response.data.hits],
                totalHits: response.data.totalHits,
                page: prevState.page + 1,
            }));
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
          this.setState({ isLoading :false });
        }
    };

    render() {
        const { images, totalHits, isLoading } = this.state;
        const showLoadMoreButton = images.length > 0 && images.length < totalHits; // Verificăm dacă butonul trebuie să fie afișat

        if(isLoading) {
          return <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
          />
        }

        return (
            <div>
                <Searchbar onSubmit={this.handleSearchSubmit} />
                <ImageGallery images={images} />
                <Button onLoadMore={this.fetchImages} isVisible={showLoadMoreButton} />
            </div>
        );
    }
}

export default App;