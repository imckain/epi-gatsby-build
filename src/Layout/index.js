import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/reset.scss';
import * as styles from './Layout.module.scss';

const Layout = (props) => {
    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    siteTitle
                }
            }
        }
    `);

    const { siteTitle } = data.site.siteMetadata;
    
    return(
        <Fragment>
            <Helmet>
            <script src="https://kit.fontawesome.com/7c7f4aabd8.js" crossorigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" ></link>
                <title>{siteTitle}</title>
            </Helmet>
            <div className={styles.Layout}>
                <Header siteTitle={siteTitle} />
                <main>
                    { props.children }
                </main>
                <Footer siteTitle={siteTitle} />
            </div>
        </Fragment>
    );
}

export default Layout;