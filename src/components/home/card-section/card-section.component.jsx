import React from 'react'
import {Card, SubHeading} from '../../../elements'

const CardSection = () => {
    return (
        <div>
            <Card>
                <SubHeading modifiers="center">Your Call To Action</SubHeading>
                <Card.Button modifiers="submit">Check it out</Card.Button>
            </Card>
        </div>
    )
}

export default CardSection
