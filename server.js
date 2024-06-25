import express from "express";
import dotenv from "dotenv";
import downloadFile from "./utils.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.post("/replicate", async (req, res) => {
  console.log({
    replicate_webhook_received: new Date().toISOString(),
    body: req.body,
  });

  req.body.output.forEach(async (url) => {
    await downloadFile(url);
  });

  res.json({ status: "ACCEPTED" });
});

app.post("/resend", async (req, res) => {
  console.log({
    resend_webhook_received: new Date().toISOString(),
    body: req.body,
  });

  res.json({ status: "ACCEPTED" });
});

app.listen(port, () => {
  console.log(`🪝 Server running at http://localhost:${port}`);
});
