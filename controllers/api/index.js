const router = require('express').Router(); //creates a router instance that will gather all of the model 
                                            //routes and package and export them out
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;