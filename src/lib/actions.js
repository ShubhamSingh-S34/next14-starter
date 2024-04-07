"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Post, User } from "./models";
import bcrypt from "bcrypt";


export const addPost = async (formData) => {
    // "use server";
    console.log(formData);
    const { title, userId, desc, slug } = Object.fromEntries(formData);
    console.log(title, userId, desc, slug);
    try {
        connectToDb();
        const post = new Post({ title, userId, body: desc, slug });
        await post.save();
        console.log(post);
        console.log("saved to db");
        revalidatePath(`/blog`)
    } catch (error) {
        console.log("ERROR>>>>", error);
    }
}
export const deletePost = async (formData) => {
    // "use server";
    console.log(formData);
    const { postId } = Object.fromEntries(formData);
    console.log("This is the post id : ", postId);
    try {
        connectToDb();
        await Post.findByIdAndDelete(postId);
        console.log("deleted from db");
        revalidatePath(`/blog`)
    } catch (error) {
        console.log("ERROR>>>>", error);
    }
}


export const register = async (formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    console.log("inside register, ", formData)
    if (password != passwordRepeat) {
        return "Passwords don not match";
    }
    try {
        connectToDb();
        const user = await User.findOne({ username });
        if (user) {
            return "User already exists";
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, email, password: hashedPassword, img
        })
        await newUser.save();
        console.log("New user registered....");
    }
    catch (e) {
        console.log("OOPS ERROR REGISTERING NEW USER ----->", e);
    }
}