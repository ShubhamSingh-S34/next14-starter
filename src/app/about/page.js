import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css";
export const metadata = {
    title: 'About Page',
    description: 'Next.js About description',
}
function About() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We creaate digital ideas bigge, bolder and bettter</h1>
                <p className={styles.desc}>this is a very big description..........</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h2>
                            10K+
                        </h2>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h2>
                            10K+
                        </h2>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h2>
                            10K+
                        </h2>
                        <p>
                            Years of experience
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src='/about.png' alt='' width={400} height={400} />
            </div>
        </div>
    )
}

export default About