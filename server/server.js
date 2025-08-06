require('dotenv').config();
const express = require('express');
const authRouter = require('./router/auth-router');
const contactRouter = require('./router/contact-router');
const connectDb = require('./utils/db');

const app = express();
const PORT = 5000;
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
  });
});
