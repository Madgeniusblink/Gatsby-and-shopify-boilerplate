import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'


const WithSpinner = ({ isLoading }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : null
}

/**
 * EXAMPLE WITH A WRAPPED COMPONENT
 */
// const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     )
// }



export default WithSpinner
