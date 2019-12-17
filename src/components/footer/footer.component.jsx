import React from "react";

const Footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.madgeniusblink.com">Gatsby</a>
        </footer>
    );
};

export default Footer;
