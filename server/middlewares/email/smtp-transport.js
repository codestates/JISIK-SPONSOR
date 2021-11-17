require('dotenv').config();

const smtpTransport = {
  service: process.env.NODEMAILER_SERVICE,
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
};

module.exports = smtpTransport;
