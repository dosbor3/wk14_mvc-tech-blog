const router = require('express').Router(); //creates a router instance that will gather all of the model 
                                            //routes and package and export them out
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;