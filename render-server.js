// render-server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define the MCP handlers directly
const metadataHandler = (req, res) => {
  res.json({
    toolName: "Notion MCP Server",
    description: "Claude integration for Notion via MCP",
    supportedTools: ["claude"],
    toolIcon: "🧠",
    toolColor: "#000000"
  });
};

const validateHandler = (req, res) => {
  res.json({ valid: true });
};

const respondHandler = (req, res) => {
  const prompt = req.body?.prompt ?? "(empty)";
  res.json({
    thoughts: "This is a response from your Render-hosted Notion MCP server.",
    response: `You sent: "${prompt}"`
  });
};

// Routes
app.get("/metadata", metadataHandler);
app.post("/validate", validateHandler);
app.post("/respond", respondHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Notion MCP HTTP server running on port ${port}`);
});
