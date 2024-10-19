import React from 'react';

const Button = ({ onLoadMore, isVisible }) => {
    if(!isVisible) {
        return null;
    }

    return (
            <button type='button' onClick={onLoadMore}>Load more</button>
    )
}

export default Button;