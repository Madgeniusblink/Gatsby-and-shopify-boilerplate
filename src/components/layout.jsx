/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider } from 'styled-components'

import Header from "./header/header.component";
import Footer from "./footer/footer.component";
import GlobalStyle from './Global'
import { Main } from './layout.styles'
import { PrimaryTheme, SecondaryTheme } from '../utilities'

export const LayoutQuery = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;




const Layout = ({ children }) => {
    const data = useStaticQuery(LayoutQuery);

    return (
        <ThemeProvider theme={PrimaryTheme}>  
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <ThemeProvider theme={SecondaryTheme}>
                <Main> {children} </Main>
            </ThemeProvider>
            <Footer />
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
