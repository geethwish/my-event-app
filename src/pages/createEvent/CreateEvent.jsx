import React from 'react'

// components
import Image from '../../components/Image/Image'
import PageContainer from '../../components/PageContainer/PageContainer'
import FeatureItem from '../../components/FeatureItem/FeatureItem'

// images
import BirthdayImage from '../../assets/images/png/BirthdayCake.png'

// styles
import styles from './createEvent.module.scss'

const CreateEvent = () => {

    const featureList = [
        {
            id: 1,
            title: '18 August 6.00Pm',
            description: 'to 19 August 1pm UTC +10',
            type: 'date'
        },
        {
            id: 2,
            title: 'Street Name',
            description: 'suburb, state, postcode',
            type: 'location'
        }
    ]
    return (
        <>
            <PageContainer className={styles.lightBackground}>

                <div className={styles.contentWrapper}>

                    <div className={styles.textContent}>

                        <h3 className={styles.title}>
                            Birthday Bash
                        </h3>
                        <p className={styles.hostedText}>
                            Hosted by <strong>Elysia</strong>
                        </p>

                        <div className={styles.featureWrapper}>
                            {
                                // set data to FeatureItem component using features list 
                            }
                            {
                                featureList.map((feature, index) => (
                                    <FeatureItem key={index} {...feature} />
                                ))
                            }

                        </div>

                    </div>

                    <div className={styles.imageWrapper}>

                        <Image src={BirthdayImage} />

                    </div>

                </div>
            </PageContainer>
        </>
    )
}

export default CreateEvent