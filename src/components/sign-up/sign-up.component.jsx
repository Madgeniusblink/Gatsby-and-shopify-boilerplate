import React from 'react'
import { FormInput, CustomButton } from '../../elements'
const SignUp = () => {
    return (
        <div>
            <h2>SignUp with Custom Buttom and reuseable FormInput</h2>
            <form>
                <FormInput 
                    type="text"
                    name="displayName"
                    value="displayName"
                    onChange={() => {}}
                    label='Display Name'
                    required
                />
                <FormInput 
                    type="email"
                    name="email"
                    value="email"
                    onChange={() => {}}
                    label='Email'
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value="password"
                    onChange={() => {}}
                    label='Password'
                    required
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value="confirmPassword"
                    onChange={() => {}}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
