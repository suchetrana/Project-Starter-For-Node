const express = require('express');
const { PORT } = require('./config/index');
const { router : apiRoutes } = require('./routes');

const app = express();

app.use('/api', apiRoutes); // ✅ Attach routes directly to app

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});