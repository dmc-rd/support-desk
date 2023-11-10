const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5001;
//const cors = require('cors');

//Connect to DB
connectDB();

const app = express();
// app.use(
//   cors({
//     origin: '*',
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the support API' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
