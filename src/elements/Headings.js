import styled from 'styled-components'
// import { below } from '../utilities'
import { applyStyleModifiers } from 'styled-components-modifiers'


const HEADING_MODIFIERS = {
    center: () => `
        text-align: center;
    `
}

export const Heading = styled.h1`

`


export const SubHeading = styled.h2`

    ${applyStyleModifiers(HEADING_MODIFIERS)}
`
export const ListHeading = styled.h3`

`