import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 *
 */

/**
 * Farmating Images for specific sizes
 */
export const squareImage = graphql`
    fragment squareImage on File {
        childImageSharp {
            fixed(width: 300, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed
            }
        }
    }
`;

/**
 * Query can not live in other files unless it returns something.
 * you can create multiple fragments to fit multiple images
 */

export const HomePageImages = graphql`
    query {
        image1: file(relativePath: { eq: "images/city-dawn-sunset-skyline.jpg" }) {
            ...squareImage
        }
        image2: file(relativePath: { eq: "images/dog-with-leash.jpg" }) {
            ...squareImage
        }
        image3: file(relativePath: { eq: "images/white-and-black-dalmation.jpg" }) {
            ...squareImage
        }
    }
`;

export const Image1 = () => {
    const data = useStaticQuery(HomePageImages);
    return <Img fixed={data.image1.childImageSharp.fixed} />;
};
export const Image2 = () => {
    const data = useStaticQuery(HomePageImages);
    return <Img fixed={data.image2.childImageSharp.fixed} />;
};
export const Image3 = () => {
    const data = useStaticQuery(HomePageImages);
    return <Img fixed={data.image3.childImageSharp.fixed} />;
};
