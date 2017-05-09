/**
 * Created by tung on 2/05/17.
 */
let express = require('express');
let controller = require('../controllers/survey.server.controller');
/*
 * initial the router
 */
let router = express.Router();

router.get('/', controller.showForm);
router.post('/survey', controller.showResult);
module.exports = router;