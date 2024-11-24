import connectDatabase from "../config/dbConfig.js";

const dbConnection = await connectDatabase(process.env.CONNECTION_STRING);

export async function getAllPosts() {
    const db = dbConnection.db("imersao-instabytes");
    const collection = db.collection("posts");

    return collection.find().toArray();
}

export async function saveNewPost(newPost) {
    const db = dbConnection.db("imersao-instabytes");
    const collection = db.collection("posts");

    return collection.insertOne(newPost);
}