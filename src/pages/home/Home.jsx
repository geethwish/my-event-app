import { Container, Grid } from '@mui/material'
import React from 'react'
import { EventCard } from '../../components/EventCard/EventCard'
import Button from '../../components/Form/Button/Button'
import PageContainer from '../../components/PageContainer/PageContainer'

import styles from './Home.module.scss'

import classNames from 'classnames';
const Home = () => {
    return (
        <>
            <PageContainer className={styles.lightBackground}>
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid item xs={5}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={7} style={{ height: '100%' }}>

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

                            <div className={styles.buttonContainer}>
                                <Button label={"🎉 Create my event"} className={classNames(styles.gradientButton, styles.buttonWidth)} />
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </PageContainer>
        </>
    )
}

export default Home