const mongoose = require('mongoose');
const User = require('./user')
const interation = {
	addUser: (name,email,password) => {
		return new Promise((reject,resolve) => {
			User.create({
				name:name,
				email:email,
				password:password
			},function(err,user){
				if(err){
					res.status(500).send('There was a problem adding information to the database')
					reject(err);
				}
				resolve(res.status(200).send(user));
			});

		});
	},
	findAllUser: () => {
		return new Promise((reject,resolve) => {
			User.find({},(err,users) => {
				if(err) reject(err);
				resolve(res.status(200).send(user));
			})
		});
	}
}