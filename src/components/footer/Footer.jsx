import React from 'react'
import styles from "./footer.module.css"
function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>S.S</div>
            <div className={styles.text}>Notorious thought agency | All rights reserved</div>
        </div>
    )
}

export default Footer