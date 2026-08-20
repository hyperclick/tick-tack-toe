require("dotenv").config();
const express = require("express");
const cors = require("cors");

const fs = require("fs");

console.log("Текущая рабочая директория (CWD):", process.cwd());

try {
  // Читаем список файлов и папок в текущей директории
  const files = fs.readdirSync(process.cwd());
  console.log("Список файлов в CWD:", files);
} catch (err) {
  console.error("Не удалось прочитать директорию:", err.message);
}

console.log({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  LAYERO_START: process.env.LAYERO_START,
  TEST_VAR: process.env.TEST_VAR,
});

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
