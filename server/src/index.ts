import mongoose from 'mongoose';
import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import passport from 'passport';
import config from '@config';
import api from './api';
import startup from './startup/startup';

//
// INIT
//
function init() {
  let db  = mongooseSetup();
  let app = expressSetup();

  startup();

  // load all api routes
  app.use('/api', api);

  app.listen(config.get('port'));
};

//
// EXPRESS SETUP
//
function expressSetup() {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());

  return app;
};

//
// MONGOOSE SETUP
//
function mongooseSetup() {
  let mongoUri = 'mongodb://' + config.get('db').host + '/' + config.get('db').name;
  mongoose.set('debug', config.get('db').debug);

  mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
  });

  return mongoose.connect(mongoUri, { useNewUrlParser: true });
};

//
// START SERVER
//
init();