import styles from "./postcard.module.css"
import Image from 'next/image'
import Link from 'next/link'



const Postcard = ({ post }) => {
    console.log("POSTS : ", post);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image src="/contact.png" alt='postimage' className={styles.img} fill />
                </div>
                <span className={styles.date}>01.01.23</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
            </div>
        </div>
    )
}

export default Postcard