import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as styles from './SplashScreen.module.scss'

const SplashScreen = (props) => {
    const data = useStaticQuery(graphql`
        query SplashQuery {
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
            <div className={styles.BackgroundImage}></div>
            <div className={styles.WelcomeMessageContainer}>
                <h1>{siteTitle}</h1>
                <span>est. 1993</span>
            </div>
            <div className={styles.ShowcaseContainer}>
                <div className={styles.ShowcaseList}>
                    <ul>
                        <li>
                            <p>Reliable, Quality Engineering</p>
                        </li>
                        <li>
                            <p>Advanced Techniques</p>
                        </li>
                        <li>
                            <p>Modern Technologies</p>
                        </li>
                        <li>
                            <p>Proven Record</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;