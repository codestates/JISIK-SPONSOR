const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

// AWS S3 File Upload
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID, //노출주의
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY, //노출주의
  region: process.env.AWS_S3_REGION //노출주의
});

const uploadProfile = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'jisiksponsor.com',
    key: function (req, file, cb) {
      cb(
        null,
        `uploads/users/profile/${req.userId}/${Date.now()}-${file.originalname}`
      );
    },
    acl: 'public-read',
    limits: { fileSize: 5 * 1024 * 1024 },
    contentType: multerS3.AUTO_CONTENT_TYPE
  })
});

module.exports = uploadProfile;
