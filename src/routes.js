//Configure express router
const Router = require('express-promise-router');
const router = new Router();

//Enable body parsing
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Import API
const api = require('./api');

// Routes
router.get('/status', api.status); // Route for getting the status

module.exports = router;
