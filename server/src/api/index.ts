//////////////////////////////////////////////////////////////////////////////////////////////
// API GATE
//////////////////////////////////////////////////////////////////////////////////////////////
import express from 'express';
//--------------------------------------------------------------------------------------------
import errorHandler from './common/middlewares/error-handler';
import users from './users/users.controller';
import usersAuth from './users/users-auth.controller';
import usersMe from './users/users-me.controller';
import articles from './articles/articles.controller';
//--------------------------------------------------------------------------------------------

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));

// all api routes
router.use('/users', users);
router.use('/auth', usersAuth);
router.use('/me', usersMe);
router.use('/articles', articles);

// catch all errors from api routes
router.use(errorHandler);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  res.status(404).send('Not found');
});

export default router;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES
//--------------------------------------------------------------------------------------------