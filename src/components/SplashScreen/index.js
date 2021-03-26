import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as styles from './SplashScreen.module.scss'

const SplashScreen = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                }
            }
        }
    `);

    const { siteTitle } = data.site.siteMetadata;

    return(
        <div className={styles.SplashScreenContainer}>
            <div className={styles.WelcomeMessageContainer}>
                <h1>{siteTitle}</h1>
            </div>
        </div>
    );
};

export default SplashScreen;