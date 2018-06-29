'use strict';

const assert = require('assert');
var cloudinary = require('cloudinary');
const defaultConfig = require('../config/config.default');

module.exports = app => {
  const config = Object.assign(defaultConfig.cloudinary, app.config.cloudinary);
  app.addSingleton('cloudinary', createOneClient(config, app));
};
function createOneClient(config, app){
  assert(config.cloud_name && config.api_key && config.base, '[egg-cloudinary]  required on config');
  app.coreLogger.info('[egg-cloudinary] init %s', config.cloud_name);
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
