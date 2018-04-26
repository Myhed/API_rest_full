const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const interactionDB = require('./dbInteraction');

router.post('/',(req,res) => {
	interactionDB.addUser(req.body.name,req.body.email,req.body.password);
});

router.get('/',(req,res) => {
	
});
module.exports = router;