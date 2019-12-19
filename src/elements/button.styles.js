import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { elevation } from '../utilities'


/**
 * cool buttons to modify from 
 * https://uicookies.com/css-buttons/
 */

 const BUTTON_MODIFIERS = {
     small: () => `
        font-size: 10px;
        padding: 0px 10px;
        height: 25px;
        min-width: 105px;
        line-height: 0;
     `,
     medium: () => `
        font-size: 15px;
        padding: 0px 20px;
        height: 35px;
        min-width: 125px;
        line-height: 25px;
     `,
     cancel: ({theme}) => `
        background-color: ${theme.colors.warning};
        color: white;
    
        :hover {
            color: ${theme.colors.warning};
            background-color: white;
            border: 1px solid ${theme.colors.warning};
        }
     `,
     submit: ({theme}) => `
        background-color: ${theme.colors.submit};
        color: white;
    
        :hover {
            color: ${theme.colors.submit};;
            background-color: white;
            border: 1px solid ${theme.colors.submit};
        }
     `,
     reset: ({theme}) => `
        background-color: ${theme.colors.reset};
        color: ${theme.colors.primary};
        

        :hover {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.reset};
            border: 1px solid ${theme.colors.primary};
        }
     `
 }


/**
 * BASE STYLE
 */
export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 30px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    transition: all 0.3s ease;
    transition-property: box-shadow, background;
    background-color: ${props => props.theme.colors.primary};
    ${elevation[1]};


    :hover {
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.primary};
        ${elevation[2]};
        
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`
