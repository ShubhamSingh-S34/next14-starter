// "use client";
import React, { Suspense } from 'react';
import styles from "./singlepost.module.css";
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';
import { Post } from '@/lib/models';
// const getData = async (id) => {
//     const res = await fetch(`http://localhost:3000/api/blog/${id}`, { cache: "no-store" });
//     if (!res.ok) {
//         throw new Error("Something went wrong.");
//     }
//     return res.json();
// }
const getData = async (id) => {
    try {

        const post = await Post.findOne({ slug: id });
        console.log(post);
        return post;
    }
    catch (e) {
        console.log("OOPS ERROR-----> ", e);
    }
}
export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);
    return {
        title: post.title,
        description: post.description
    };
}

async function SinglePost({ params }) {
    const { slug } = params;
    console.log("This is the slug :", slug);
    const post = await getData(slug);
    console.log("This is the post : ", post);
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/contact.png" width={400} height={400} className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    {post && <Suspense fallback={<div>Loading ...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt}</span>
                    </div>
                </div>
                <div className={styles.contentDiv}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePost