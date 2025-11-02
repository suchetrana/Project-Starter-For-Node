const express = require('express');
const { PORT } = require('./config/index')

const app = express();

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});