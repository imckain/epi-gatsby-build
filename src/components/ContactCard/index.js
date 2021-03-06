import React from 'react';

import * as styles from './ContactCard.module.scss';

const ContactCard = (props) => {

    return(
        <div className={styles.ContactCard}>
            <div className={styles.ContactCardContent}>
                <div className={styles.Logo}>
                    EPI
                    <span>EST. 1993</span>
                </div>
                <span>Contact us:</span>
                <div className={styles.ContactCardRule}></div>
                <div className={styles.ContactOptions}>
                    <div className={styles.ContactItem}>
                        <span className="material-icons">phone</span>
                        <a className={styles.Phone} href="tel:+">304.555.5555</a>
                    </div>
                    <div className={styles.ContactItem}>
                        <span className="material-icons">phone</span>
                        <a className={styles.Phone} href="tel:+">304.555.5555</a>
                    </div>
                    <div className={styles.ContactItem}>
                        <span className="material-icons">email</span>
                        <a className={styles.Email} href="mailto:">epi@mail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;