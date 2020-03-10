let cli = require('caporal');
const axios = require('axios');

cli.version('1.0.0').command('ip-external', 'Your ip address external').action((args, options, logger) => {
	axios
		.get('https://jsonip.com/')
		.then(function(response) {
			// handle success
			console.log(response.data.ip);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		});
});

cli.parse(process.argv);
