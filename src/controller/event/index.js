const express = require('express');
const router = express.Router();

router.get('/details/:id', require('./detail'));
router.get('/list', require('./list'));
router.get('/new', require('./new'));
router.get('/edit/:id', require('./edit'));
router.put('/edit/:id', require('./update'));
router.post('/new', require('./create'));
router.delete('/delete/:id', require('./delete'));

module.exports = router;