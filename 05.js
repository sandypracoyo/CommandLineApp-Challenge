let cli = require('caporal');
cli
	.version('1.0.0')
	.command('random', 'Random String')
	.option('--length <length>', 'Panjang', cli.INT)
	.action((args, options, logger) => {
		const random = (length = 32) => {
			let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			let result = '';
			for (let i = length; i > 0; i--) {
				result = result + char[Math.floor(Math.random() * char.length)];
			}
			return result;
		};
		console.log(random(options.length));
	});

cli.parse(process.argv);
