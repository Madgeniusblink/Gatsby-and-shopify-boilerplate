import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { Link } from 'gatsby'




const LINK_MODIFIERS = {
    internal: ({theme}) => `
        color: ${theme.colors.primary};

        :before {
            background-color: ${theme.colors.primary};
        }
    `,
    external: ({theme}) => `
        color: ${theme.colors.external};
        
        :before {
            background-color: ${theme.colors.external};
        }
    `,
    headerTitle: ({theme}) => `
        color: ${theme.colors.white};
        font-size: inherit;

        :before {
            background-color: ${theme.colors.white};
        }
    `
}

const Links = styled(Link)`
    text-align:center;
    text-decoration: none;
    position: relative;
    font-size: 15px;
    text-transform: uppercase;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-weight: bolder;
    cursor: pointer;
    
    :before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
    }

    :hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
    }
    ${applyStyleModifiers(LINK_MODIFIERS)}
`

export default Links



