const footFunctionality = require('./functionality/foot');

module.exports = (fb, sender, data, res) => {
	const type = data.payload.split('_')[0];
	if (type === 'foot') {
		const ref = data.payload.split('_')[1];
		footFunctionality.nextNew(fb, sender, ref)
		res.sendStatus(200);
	}
}