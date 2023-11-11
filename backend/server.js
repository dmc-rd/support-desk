const path = require('path');
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

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

//Serve Frontend
if (process.env.NODE_ENV === 'production') {
  //set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the support API' });
  });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
