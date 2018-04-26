const User = require('./user')
const interaction = {
	addUser: (name,email,password) => {
		return new Promise((reject,resolve) => {
			User.create({
				name:name,
				email:email,
				password:password
			},function(err,user){
				if(err){
					reject(err);
				}
				resolve(users);
			});

		});
	},
	findAllUser: () => {
		return new Promise((reject,resolve) => {
			User.find({},(err,users) => {
				if(err) reject(err);
				resolve(users);
			})
		});
	}
}

module.exports = interaction