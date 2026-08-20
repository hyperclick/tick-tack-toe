require("dotenv").config();
const express = require("express");
const cors = require("cors");

console.log({ env: process.env.NODE_ENV, port: process.env.PORT, LAYERO_START : process.env.LAYERO_START  });

const PORT = process.env.PORT || 3000;

const app = express();

const isLocal = process.env.NODE_ENV === "local";
if (isLocal) {
  app.use(cors());
}
// проверочный робот Layero получит внятный JSON-ответ, и предупреждение исчезнет
app.get("/api/", (req, res) => res.json({ status: "API is working" }));

app.get("/api/version", (req, res) =>
  res.json({ major: 0, minor: 1, build: 3 }),
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
