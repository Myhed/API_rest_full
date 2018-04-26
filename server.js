const app = require('./app');
const port = process.env.PORT || 4000;
const db = require('./db')
const server = app.listen(port,() => {
	console.log('sever started on port ' + port);
});