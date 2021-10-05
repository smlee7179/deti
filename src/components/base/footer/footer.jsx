import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="footer-copyright">
                @Copyright 2021 PROJECT All rights reserved
            </h1>
        </footer>             
    )
}

export default hot(module)(Footer);