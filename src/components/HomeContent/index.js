import React from 'react';

import * as styles from './HomeContent.module.scss'

const HomeContent = (props) => {

    return(
        <div className={styles.HomeContentContainer}>
            <div className={styles.HomeContentBanner}></div>
            <div className={styles.HomeContent}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur, possimus dicta amet maiores saepe commodi architecto sunt? Recusandae explicabo, eius molestias harum eos a iste cupiditate qui deserunt ea.
                Nostrum quibusdam earum maxime pariatur sunt molestiae deleniti placeat corporis ad, commodi maiores consequuntur eveniet consequatur quam dolor vero dicta animi laborum architecto ea quas, possimus iste laudantium. Repellendus, consectetur?
                Quo error cum rerum impedit quam, vel unde totam ducimus sit odit amet provident deserunt dignissimos dolorem non est blanditiis ad maxime corrupti culpa nam, fugit ea obcaecati? Exercitationem, sequi!
                Unde voluptatem voluptatum dignissimos mollitia aliquid quod in commodi quas, maxime ab inventore ratione qui, pariatur animi et velit amet nulla nemo praesentium ducimus. Minus officiis veniam quas ipsa unde?
                Facilis ratione placeat alias quidem voluptatem illo deserunt autem sint laborum dolore? Nobis magnam, delectus, voluptate atque unde amet autem veniam similique neque ad eius a, vitae iure molestias recusandae!</p>
            </div>
            <div className={styles.ContactModule}>
                
            </div>
        </div>
    )
}

export default HomeContent;