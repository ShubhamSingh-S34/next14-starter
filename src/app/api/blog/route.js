import { connectToDb } from "@/lib/connectToDB";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {
    try {
        console.log("Inside route.js", "connecting to database");
        connectToDb();
        const posts = await Post.find();
        console.log(posts);
        return response.status(200).json(posts);
    } catch (error) {
        console.log("Falied to fetch posts", error);
        return response.status(500).json({ error: "Failed to fetch posts" });
    }
}
