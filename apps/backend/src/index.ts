import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ramizrajah.github.io",
      "https://ramizrajah.github.io/turborepo-test/",
    ],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend API!" });
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
