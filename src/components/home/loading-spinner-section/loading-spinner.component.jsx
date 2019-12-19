import React from 'react'
import WithSpinner from '../../../elements/with-spinner/with-spinner.component'
const LoadingSpinner = () => {
    return (
        <div>
            <h2>Loading Spinner</h2>
            <WithSpinner isLoading="true"/>
        </div>
    )
}

export default LoadingSpinner
