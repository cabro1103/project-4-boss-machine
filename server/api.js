const express = require('express');

//Create parent router and child routers within.
const apiRouter = express.Router();
const minionRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

//Nest the routers.
apiRouter.use('/minions', minionRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

//Export
module.exports = apiRouter;