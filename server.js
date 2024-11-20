import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Server is listening...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Hello World");
});

