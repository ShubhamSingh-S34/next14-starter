
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'



async function Login() {
    // const session = await auth();
    // console.log("THIS IS USER SESSION ------------------->  ", session);
    const session = await getServerSession(options);
    console.log("This is session -----> ", session);
    return (
        <div>
            <Link href="/api/auth/signin">Login with Github</Link>
        </div>
    )
}

export default Login

