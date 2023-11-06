const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/login', siteController.login);
router.post('/login', siteController.checkLogin);
router.get('/', siteController.home);

module.exports = router;