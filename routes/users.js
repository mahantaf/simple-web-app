var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    const user = req.body;
    saveUser(user);
});

router.put('/:id', function(req, res, next) {
    const userData = req.body;
    const user = Users.findOne({ userData });
    updateUser(user);
});

module.exports = router;
