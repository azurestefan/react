import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = props => {
    const images = props.images.map((image) => { //images. repeated so refactored. Removed later to get ImageCards
        return <ImageCard key={image.id} image={image}/> //removed images. from description, id, urls. Replaced with ImageCard.
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;