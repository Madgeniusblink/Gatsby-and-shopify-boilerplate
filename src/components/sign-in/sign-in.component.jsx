import React from 'react'
import { FormInput, CustomButton } from '../../elements'
const SignIn = () => {
    return (
        <div>
            <h2>User Sign in with Custom Buttom and reusableFormInput</h2>
            <form onSubmit={() => {}}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value="email"
                    label='Email'
                    handleChange={() => {}} 
                    required
                />
                
                <FormInput 
                    name="password" 
                    type="password" 
                    value="password" 
                    label='Password'
                    handleChange={() => {}}
                    required
                />
                
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" onClick={() => {}} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
