import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css";
import Image from 'next/image';
// import { auth } from '@/lib/auth';

async function Navbar() {
    // const session = await auth();
    // console.log(session);
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>S.S</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar