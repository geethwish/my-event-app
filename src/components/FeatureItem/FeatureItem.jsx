import React from 'react'

import { GoLocation } from 'react-icons/go';
import { BiChevronRight } from 'react-icons/bi';
import { IoIosCalendar } from 'react-icons/io';



import styles from './FeatureItem.module.scss'
const FeatureItem = ({ title, type, description }) => {
    return (
        <div className={styles.featureItemWrapper}>

            <div className={styles.contentSection}>

                <div className={styles.iconWrapper}>
                    {
                        type && type === 'location' && <GoLocation className={styles.icon} />
                    }

                    {
                        type && type === 'date' && <IoIosCalendar className={styles.icon} />
                    }

                </div>

                <div className={styles.detailsSection}>
                    <p className={styles.title}>
                        {title ? title : 'title'}
                    </p>
                    <p className={styles.description}>
                        {description && description}
                    </p>
                </div>

            </div>

            <div className={styles.action}>
                <BiChevronRight className={styles.icon} />
            </div>
        </div>
    )
}

export default FeatureItem