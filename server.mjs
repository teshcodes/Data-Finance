 // server.mjs
import express from "express";
import cors from "cors";
import Replicate from "replicate";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8787;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const token = process.env.REPLICATE_API_TOKEN;
if (!token) {
  console.warn("⚠ REPLICATE_API_TOKEN not set in .env");
}
const replicate = token ? new Replicate({ auth: token }) : null;

app.post("/api/generate-image", async (req, res) => {
  const { prompt } = req.body;
  if (!replicate) {
    return res.status(500).json({ error: "Replicate token missing." });
  }
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    console.log(`🖼 Generating image for prompt: "${prompt}"`);
    const output = await replicate.run(
      "stability-ai/stable-diffusion-3.5-large",
      { input: { prompt } }
    );
    console.log("✅ Output:", output);

    // Replicate returns a list of image URLs
    res.json({ imageUrl: output[0] });
  } catch (err) {
    console.error("❌ Error from Replicate:", err);
    res.status(500).json({ error: "Failed to generate image", details: err.message });
  }
});

app.listen(port, () => console.log(`🚀 Server listening on http://localhost:${port}`));
