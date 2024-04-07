import { connectToDb } from "@/lib/connectToDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;
    try {

        connectToDb();
        const post = await Post.findOne({ slug });
        console.log("This is from server side api : ", post);
        return NextResponse.json(post);
    } catch (error) {
        console.log("Falied to fetch post", error);
    }
};
export const DELETE = async (request, { params }) => {
    const { slug } = params;
    try {

        connectToDb();
        const post = await Post.deleteOne({ slug });
        console.log("Post deleted : ", post);
        return NextResponse.json(post);
    } catch (error) {
        console.log("Falied to delete post", error);
    }
}