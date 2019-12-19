import styled, { css } from 'styled-components'

// MainButtonStyles
const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    :hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

// CustomButtonStyles
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    :hover {
        background-color: black;
        color: white;
        border: none;
    }
`
// CustomButtonStyles
const googleSignInButtonStyles = css`
    background-color: #4285f4;
    color: white;

    :hover {
        background-color: #357ae8;
        border: none;
    }

`
// Checks for Props to decide which button style to render
const getButtonStyles = props => {
    if (props.isGoogleSignIn) { 
        return googleSignInButtonStyles 
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}


// BASIC WEBSITE BUTTON
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 30px;
    font-size: 15px;
    
    
    text-transform: uppercase;
    font-weight: bolder;
    
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`

