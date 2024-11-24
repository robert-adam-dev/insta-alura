import {getAllPosts, saveNewPost} from "../models/postModel.js";
import fs from "fs";

export async function getPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function createNewPost(req, res) {
    const newPost = req.body;

    try{
        const createdPost = await saveNewPost(newPost);
        res.status(201).json(createdPost);
    } catch (error){
        console.error(error.message);
        res.status(500).json({"Error": "Request error."});
    }

}

export async function uploadImage(req, res) {
    
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const createdPost = await saveNewPost(novoPost);
        const uploadImage = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, uploadImage)
        res.status(200).json(createdPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Error":"Request error"})
    }

}