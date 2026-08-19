const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/api/version", (req, res) => res.json({major:0, minor: 1, build: 3}));


app.listen(8000);