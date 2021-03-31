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
                <div>
                    <h1>{siteTitle}</h1>
                    <span>est. 1993</span>
                </div>
            </div>
            <div className={styles.ShowcaseContainer}>
                <div className={styles.ShowcaseList}>
                    <ul>
                        <li>
                            <p className={styles.P1}>Reliable, Quality Engineering</p>
                        </li>
                        <li>
                            <p className={styles.P2}>Advanced Techniques</p>
                        </li>
                        <li>
                            <p className={styles.P3}>Modern Technologies</p>
                        </li>
                        <li>
                            <p className={styles.P4}>Proven Record &nbsp;</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;