require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = require('../app');
const { sequelize } = require('../models');

const PORT = process.env.PORT_NUMVER || 4000;

// Handling unexpected exceptions
process.on('uncaughtException', (err) => {
  console.log('uncaughtException : ', err);
});

// Check DB connection
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('👉👈 Database connection successfully!');
  })
  .catch((err) => {
    console.error('🗄  Database Error! ' + err);
  });

// Server Running
app.listen(PORT, () => {
  console.log(`🚀 server runnning - port ${PORT}`);
});

module.exports = app;
