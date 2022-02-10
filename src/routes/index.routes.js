const router = require('express').Router();

const { renderIndex, renderAbout } = require('../controllers/index.controllers')

router.get('/', renderIndex)

router.get('/about', renderAbout)

module.exports = router;