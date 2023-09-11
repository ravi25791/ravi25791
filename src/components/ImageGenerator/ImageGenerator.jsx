import React, {useRef,useState} from 'react';
import Default_Image from '../assets/default_image.svg';
import './ImageGenerator.css';

const ImageGenerator = () => {

    const [image_url, setImage_url]= useState("/");
    let inputRef = useRef(null);

    const ImageGenerator = async () =>{
        if(inputRef.current.value===""){
            return 0;
        }

        const response = await fetch("https://api.openai.com/v1/images/generations",
            {
                method: 'POST',

                headers:{
                    'content-type': 'application/json',
                    Authorization :`Bearer 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`,
                    "User-Agent" : "Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size:"512x512",
                }),
            }
        );
        
        let data = await response.json();
        console.log(data)
        let data_array = data.data;
        setImage_url(data_array[0].url);
    }


    return (
        <div className='ai-image-generator'>
            <div className="header">
                Ai Image <span>Generator</span>
                <div className="img-loading">
                    <div className="image">
                        <img src={image_url === "/" ? Default_Image : image_url} alt="" />
                    </div>
                </div>
            </div>
            <div className="search-box">
                        <input type="text" ref={inputRef} className='search-input' placeholder='describe what you want to see' />
                        <div className="generate-btn" onClick={()=>{ImageGenerator()}}>Generate</div>
                    </div>
        </div>
    )
}

export default ImageGenerator
