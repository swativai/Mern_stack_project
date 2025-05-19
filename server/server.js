require('dotenv').config();
const express = require('express');
const homeRouter = require('./router/auth-router');
const registerRouter = require('./router/auth-router');
const connectDb = require('./utils/db');

const app = express();
const PORT = 5000;
app.use(express.json());

app.use('/api/auth', homeRouter);
app.use('/api/auth', registerRouter);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
  });
});
