import React from 'react'
import { FormInput } from '../../../elements'


const FormInputSection = () => {
    return (
        <section>
            <h2>Reusable style components Inputs</h2>
            <FormInput
                name="email"
                type="email"
                value="email"
                label="Email"
                handleChange={() => {}}
                required
            />
            
        </section>
    )
}



export default FormInputSection
