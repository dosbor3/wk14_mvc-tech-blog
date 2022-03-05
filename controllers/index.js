const router = require('express').Router(); //creates another router instance, this will be for packaging up all API endpoints
                                            //and prefixing them with /api

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;