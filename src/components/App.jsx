import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Hourglass } from 'react-loader-spinner'
import Button from './Button';
import Modal from './Modal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            images: [],
            page: 1,
            showModal: false,
            selectedImage: null,
            totalHits: 0,
            isLoading: false
        };
        this.scrollToBottom = this.scrollToBottom.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
      const { searchQuery, page } = this.state;
      if(prevState.searchQuery !== searchQuery || prevState.page !== page) {
        this.fetchImages();
      }

      if(prevState.images.length !== this.state.images.length) {
        this.scrollToBottom();
      }
    }

    // Funcția care gestionează submit-ul din Searchbar
    handleSearchSubmit = query => {
        this.setState({ searchQuery: query, images: [], page: 1 });
    };

    // Funcția pentru a căuta imagini folosind API-ul
    fetchImages = async () => {
        const { searchQuery, page } = this.state;

        try {
          this.setState({ isLoading: true });
            const response = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=45694916-26d3469d9465de46d8eb67fae&image_type=photo&orientation=horizontal&per_page=12`);
            this.setState((prevState) => ({
                images: [...prevState.images, ...response.data.hits],
                totalHits: response.data.totalHits,
                //page: prevState.page + 1,
            }));
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
          this.setState({ isLoading :false });
        }
    };

      // Funcția care deschide modalul când se dă click pe o imagine
  handleImageClick = largeImageURL => {
    this.setState({ selectedImage: largeImageURL, showModal: true });
  };

  // Funcția care închide modalul
  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }


    render() {
        const { images, isLoading, selectedImage, totalHits, showModal } = this.state;
        const isVisible = images.length > 0 && images.length < totalHits;
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
                {isVisible && !isLoading &&
                <Button onClick={this.handleLoadMore} />
                }
                {showModal && (
                <Modal largeImageURL={selectedImage} onClose={this.closeModal} />
                )}
            </div>
        );
    }
}

export default App;