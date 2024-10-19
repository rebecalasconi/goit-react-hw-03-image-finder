import React, { Component } from "react";
import PropTypes from 'prop-types';
import './styles.css'

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if(event.code === `Escape`) {
            this.props.onClose();
        }
    };

    handleOverlayClick = event => {
        if(event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL } = this.props;
        
        return (
        <div className="Overlay" onClick={this.handleOverlayClick}>
            <div className="Modal">
                <img src={largeImageURL} alt="" />
            </div>
        </div>
        );
}
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;