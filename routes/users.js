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

router.delete('/:id', function(req, res, next) {
    const user = User.findOne({_id: req.params.id });
    user.remove();
});

module.exports = router;
