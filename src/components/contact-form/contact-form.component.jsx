import React from 'react'
import {FormInput, Button} from '../../elements'

const ContactForm = () => {
    return (
        <div>
            <h2>Contact Form using Reusable Components: Input and Button</h2>
            <form>
                <FormInput
                    name="name"
                    type="name"
                    value="name"
                    label="Name"
                    handleChange={() => {}}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    value="email"
                    label="Email"
                    handleChange={() => {}}
                    required
                />
                <FormInput
                    name="text"
                    type="textarea"
                    value="text"
                    label="Message"
                    handleChange={() => {}}
                    required
                />
                <Button modifiers="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm