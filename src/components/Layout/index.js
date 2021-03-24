import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';

import '../../styles/reset.scss';
import * as styles from './Layout.module.scss';

const Layout = (props) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
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