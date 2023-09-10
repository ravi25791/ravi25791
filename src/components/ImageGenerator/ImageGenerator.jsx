import React from 'react';
import Default_Image from '../assets/default_image.svg';
import './ImageGenerator.css';

const ImageGenerator = () => {
    return (
        <div className='ai-image-generator'>
            <div className="header">
                Ai Image <span>Generator</span>
                <div className="img-loading">
                    <div className="image">
                        <img src={Default_Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGenerator
