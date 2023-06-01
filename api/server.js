const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const userRoutes = require('./routes/auth.routes.js');
const { errorHandler, notFound } = require('./middlewares/error.middleware.js');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
// //middlewares
app.use(cors({ origin: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`.red);
});
