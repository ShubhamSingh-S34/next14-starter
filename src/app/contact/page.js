import React from 'react'
import styles from "./contact.module.css";
import Image from 'next/image';
export const metadata = {
    title: 'Contact Page',
    description: 'Next.js Contact description',
}
function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/contact.png" alt='contact image' width={400} height={400} />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type='text' placeholder='Name and Surname' />
                    <input type='text' placeholder='Email Address' />
                    <input type='text' placeholder='Phone Number (Optional)' />
                    <textarea name='' id='' cols="30" rows="10" placeholder='Message' />
                    <button className={styles.button}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact