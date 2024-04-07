import React from 'react'
import styles from "./blog.module.css"
import Postcard from '@/components/postcard/Postcard'
import { getPosts } from '@/lib/data';
import { Post } from '@/lib/models';

// const getData = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/blog", { cache: "no-store" });
//         return res.json();
//     } catch (error) {
//         console.log("OOPS ERROR ------>", error);
//     }

// }

const getData = async () => {
    try {
        const res = await Post.find();
        console.log(res);
        return res;
    } catch (error) {
        console.log("OOPS ERROR ------>", error);
    }

}
const Blog = async () => {

    const posts = await getData();

    return (
        <div className={styles.container}>
            {posts.map((post) => {
                return (
                    <div className={styles.post} key={post.id}>
                        <Postcard post={post} />
                    </div>
                )
            })}
        </div>
    )
}

export default Blog