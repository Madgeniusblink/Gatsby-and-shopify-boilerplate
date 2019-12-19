import PropTypes from "prop-types";
import React from "react";
import { AppHeader, HeaderContainer, Title } from './header.styles'
import { Link } from '../../elements'

const Header = ({ siteTitle }) => (
    <AppHeader>
        <HeaderContainer>
            <Title>
                <Link modifiers="headerTitle" to="/">
                    {siteTitle}
                </Link>
            </Title>
        </HeaderContainer>
    </AppHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
