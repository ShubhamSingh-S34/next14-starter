import mongoose from "mongoose";
// const mongoose = require("mongoose");
const connection = {};

export const connectToDb = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://jimpam:jimpam@cluster0.mv0romn.mongodb.net/nextJs_blog").then(() => {
            console.log("Connected To Database !!!");
        })
        // console.log(db);
        // console.log(db.connections[0].readyState);
        // connection.isConnected = db.connections[0].readyState;
    }
    catch (err) {
        console.log("ERROR CONNECTING TO MONGODB !!!", err);
        throw new Error(err);
    }
}
connectToDb();