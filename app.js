'use strict';

const cloudinary = require('./lib/cloudinary');

module.exports = app => {
  if (app.config.cloudinary.cloud_name) cloudinary(app);
};
