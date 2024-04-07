import { register } from '@/lib/actions'
import React from 'react'
import styles from "./register.module.css";

function Register() {
    return (
        <div>
            <form style={styles.form} action={register}>
                <input type='text' placeholder='username' name='username' />
                <input type='email' placeholder='email' name='email' />
                <input type='password' placeholder='password' name='password' />
                <input type='password' placeholder='password repeat' name='passwordRepeat' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register