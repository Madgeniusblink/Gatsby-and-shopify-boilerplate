import { createGlobalStyle } from "styled-components";
import { openSansPro } from '../utilities'
import { normalize } from 'polished'

/**
 * You are not suppose to use your Global 
 * for a main way of storing your css
 * 
 * Polished Docs: https://polished.js.org/docs
 * Modifiers Docs: https://github.com/Decisiv/styled-components-modifiers
 */
const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');
    html {
        box-sizing: border-box;
        
    }

    * , *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 100px 0 0 0;
        ${openSansPro};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
