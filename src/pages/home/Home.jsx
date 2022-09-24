import React from 'react'
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom'

// components
import Button from '../../components/Form/Button/Button'
import PageContainer from '../../components/PageContainer/PageContainer'
import Image from '../../components/Image/Image'

// images
import LandingPageImage from '../../assets/images/svg/LandingPageImage.svg'

// styles
import styles from './Home.module.scss'

const Home = (props) => {

    let navigate = useNavigate();

    const handleNavigation = () => {

        // navigate to create page
        navigate("/create")
    }

    return (
        <>
            <PageContainer className={styles.lightBackground}>

                <div className={styles.landingPageContent}>

                    <div className={styles.landingImage}>
                        <Image src={LandingPageImage} />
                    </div>

                    <div className={styles.contentWrapper}>

                        <h1>
                            Imagine if
                        </h1>

                        <h1 className={styles.coloredTitle}>
                            Snapchat
                        </h1>

                        <h1>
                            had events.
                        </h1>

                        <p className={styles.descriptionText}>
                            Easily host and share events with your friends across any social media
                        </p>

                        <div className={classNames(styles.buttonContainer, styles.xlView)}>
                            <Button label={"🎉 Create my event"} className={classNames(styles.gradientButton, styles.buttonWidth)} onClick={handleNavigation} />
                        </div>

                    </div>

                </div>

                <div className={classNames(styles.buttonContainer, styles.mdView)}>
                    <Button label={"Create my event"} className={classNames(styles.gradientButton, styles.buttonWidth)} onClick={handleNavigation} />
                </div>
                
            </PageContainer>
        </>
    )
}

export default Home