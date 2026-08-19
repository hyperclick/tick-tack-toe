require("dotenv").config();
const express = require("express");
const cors = require("cors");

console.log(process.env.FRONTEND_URL);

const PORT = process.env.PORT || 3000;

const app = express();

const isLocal = process.env.NODE_ENV === "local";
if (isLocal) {
  app.use(cors());
}
app.get("/api/version", (req, res) =>
  res.json({ major: 0, minor: 1, build: 3 }),
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
