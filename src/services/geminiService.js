import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateDescriptionWithGemini(imageBuffer) {
    const prompt =
        "Gere uma descrição em português do brasil para a seguinte imagem";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image]);
        return res.response.text() || "Description not available.";
    } catch (error) {
        console.error("Error while fetching alt-text:", error.message, error);
        throw new Error("Error while fetching the alt-text from Gemini.");
    }
}