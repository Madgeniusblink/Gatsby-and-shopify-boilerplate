import styled from 'styled-components'
import { Heading } from '../../elements'
import { elevation, fixed} from '../../utilities'

export const AppHeader = styled.header`
    background-color: rebeccapurple;
    width: 100%;
    ${fixed({ yProp: 'top' })};
    ${elevation[2]};
`

export const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`

export const Title = styled(Heading)`
    margin: 0;
`

