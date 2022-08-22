const app = require('express')();
const PORT = 8080;

app.listen(
	PORT,
	() => console.log('test')
)

app.get('/test', (req, res) => {
	res.status(200).send({
		"weather":"test"
		
	})
});