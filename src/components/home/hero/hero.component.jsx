import React from "react";
import { Image1, Image2, Image3 } from "../home.images.query";


const Hero = () => {
    return (
        <div >
            <h2>Dynamic Image Rendering</h2>
            <Image1 />
            <Image2 />
            <Image3 />
        </div>
    );
};

export default Hero;
