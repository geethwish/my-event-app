import React from 'react'
import styles from './Image.module.scss'


const Image = ({ className, alt, ...rest }) => {
    return (
        <>
            <img className={`${styles.image} ${className}`} {...rest} alt={alt ? alt : 'image'} />
        </>
    )
}

export default Image