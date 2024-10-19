import React, { Component } from "react";
import PropTypes from 'prop-types';

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
        <div className={"overlay"} onClick={this.handleOverlayClick}>
            <div class="modal">
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