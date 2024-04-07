import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";
// const users = [
//     { id: 1, name: "shubham" },
//     { id: 2, name: "Singh" },
// ]

// const posts = [
//     { id: 1, title: "Post 1", body: "............ This is a body", userId: 1 },
//     { id: 2, title: "Post 2", body: "............ ", userId: 1 },
//     { id: 3, title: "Post 3", body: "............ ", userId: 2 },
//     { id: 4, title: "Post 4", body: "............ ", userId: 2 },
// ]


export const getPosts = async () => {
    try {
        await connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get posts");
    }
}

export const getPost = async (slug) => {
    try {
        await connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get posts");
    }
}

export const getUser = async (_id) => {
    try {
        noStore();
        await connectToDb();
        // const user = await Post.findById({ id });
        const user = await User.findById({ _id });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get user");
    }
}

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get posts");
    }
}