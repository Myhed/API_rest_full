const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
const interactionDB = require('./dbInteraction');

router.post('/',(req,res) => {
	interactionDB.addUser(req.body.name,req.body.email,req.body.password).then((res) => {
		console.log(res);
		return res;
	});
});

router.get('/',(req,res) => {
	interactionDB.findAllUser().then(response => {
		res.status(200).send(response);
	}).catch(e => {
		res.status(500).send('Error is here')
	});
});
module.exports = router;