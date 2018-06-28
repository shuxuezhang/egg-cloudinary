'use strict';

const assert = require('assert');
const cloudinary = require('cloudinary');

module.exports = app => {
  app.addSingleton('cloudinary', createOneClient);
};
const createOneClient = (config, app) => {
  assert(config.cloud_name && config.api_key && config.base, '[egg-cloudinary]  required on config');
  app.coreLogger.info('[egg-cloudinary] init %s', config.ak);
  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
    base: config.base,
    image: config.image,
    video: config.video,
    audio: config.audio,
  });

  return cloudinary;
};
