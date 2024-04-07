"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./links.module.css";
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/actions';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function Links() {
    const links = [
        {
            "title": "HomePage",
            "path": "/"
        },
        {
            "title": "About",
            "path": "/about"
        },
        {
            "title": "Contact",
            "path": "/contact"
        },
        {
            "title": "Blog",
            "path": "/blog"
        }
    ]
    const [open, setOpen] = useState(false);
    const isAdmin = true;
    const session = await getServerSession(options);
    console.log("This is session ", session);
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link) => {
                    return <NavLink item={link} key={link.title} />
                })}
                {session?.user ?
                    <>
                        {session?.isAdmin && <NavLink item={{ "title": "Admin", "path": "/admin" }} />}
                        <NavLink item={{ "title": "Logout", "path": "/api/auth/signout?callbackUrl=/" }} />
                    </> :
                    <NavLink item={{ "title": "Login", "path": "/api/auth/signin" }} />
                }
            </div>
            <Image className={styles.menuButton} src="/menu.png" width={20} height={20} onClick={() => { setOpen((prev) => !prev) }} />

            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => {
                        return (<NavLink item={link} key={link.title} />)
                    })}
                </div>
            }
        </div>
    )
}

export default Links