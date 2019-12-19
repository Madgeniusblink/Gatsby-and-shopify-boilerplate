import {css} from 'styled-components'

/**
 * All positions will be stored here
 * needed for props in mixins
 */


export const fixed = ({ 
   y = 0, 
   x = 0, 
   yProp = 'top', 
   xProp = 'left' 
}) => css`
      position: fixed;
      z-index: 1;
      ${xProp}: ${x};
      ${yProp}: ${y};
`;

export const absolute = ({ 
   y = 0, 
   x = 0, 
   yProp = 'top', 
   xProp = 'left' 
}) => css`
      position: absolute;
      z-index: 1;
      ${xProp}: ${x};
      ${yProp}: ${y};
`;