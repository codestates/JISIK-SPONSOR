require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = require('../app');
const { sequelize } = require('../models');

const PORT = process.env.PORT_NUMVER || 4000;

// Check DB connection
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('👉👈 Database connection successfully!');
  })
  .catch((err) => {
    console.error(err);
  });

// Server Running
let server;

if (
  fs.existsSync(__dirname + '/key.pem') &&
  fs.existsSync(__dirname + '/cert.pem')
) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(PORT, () => {
    console.log(`🚀 HTTPS server runnning - port ${PORT}`);
  });
} else {
  server = app.listen(PORT, () => {
    console.log(`🚀 server runnning - port ${PORT}`);
  });
}

module.exports = server;
