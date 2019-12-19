import React from 'react'
import { Link } from '../../../elements'

const LinksSection = () => {
    return (
        <div>
            <h2>Reusable style components Links</h2>
            <Link modifiers="internal" to="/page" >Internal Link</Link><br />
            <Link modifiers="external" as="a" href="https://www.google.com">External Link</Link>
        </div>
    )
}

export default LinksSection

