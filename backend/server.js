require('dotenv').config();
const express = require('express');
const cors = require('cors');

console.log(process.env.FRONTEND_URL);


const PORT = process.env.PORT || 3000;

const app = express();

// Проверяем, запущен ли сервер на хостинге Layero
// Обычно хостинги сами ставят переменную NODE_ENV = 'production'
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors({
    origin: isProduction
        ? process.env.FRONTEND_URL  // Адрес живого сайта в интернете
        : '*' // На компьютере разрешаем любые локальные порты для простоты тестов
}));

app.get("/api/version", (req, res) => res.json({major:0, minor: 1, build: 3}));

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});