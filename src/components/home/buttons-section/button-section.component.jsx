import React from 'react'
import { Button } from '../../../elements'
import { Link } from 'gatsby'

const ButtonSection = () => {
    return (
        <section>
            <h2>Reusable style components buttons</h2>
            <Button as='a' href="/">Button as 'a'</Button>
            <Button as='div' >Button as 'div' </Button>
            <Button as={Link} to="/404">Button as 'Link'</Button>
            <Button type="button">Button</Button>
            <Button modifiers="cancel" type="button">Cancel</Button>
            <Button modifiers="submit" type="submit">Submit</Button>
            <Button modifiers="reset" type="reset">Reset</Button>
            <Button modifiers={["medium", "reset"]} type="reset">ResetMedium</Button>
            <Button modifiers={["medium", "submit"]} type="submit">SubmitMedium</Button>
            <Button modifiers={["small", "reset"]} type="reset">ResetSmall</Button>
            <Button modifiers={["small", "submit"]} type="submit">SubmitSmall</Button>
        </section>
    )
}



export default ButtonSection
