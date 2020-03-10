let cli = require('caporal');
cli
	.version('1.0.0')
	.command('add', 'Add number')
	.argument('[number ...]', 'text to print')
	.action((args, options, logger) => {
		const a = args.number.map((x) => parseFloat(x));
		logger.info(a.reduce((a, b) => a + b));
	});
cli
	.version('1.0.0')
	.command('substract', 'Substract number')
	.argument('[number ...]', 'text to print')
	.action((args, options, logger) => {
		const a = args.number.map((x) => parseFloat(x));
		const hasil = a.reduce((a, b) => a - b);
		logger.info(hasil === 0 ? '0' : hasil);
	});
cli
	.version('1.0.0')
	.command('multiply', 'multiply number')
	.argument('[number ...]', 'text to print')
	.action((args, options, logger) => {
		const a = args.number.map((x) => parseFloat(x));
		const hasil = a.reduce((a, b) => a * b);
		logger.info(hasil === 0 ? '0' : hasil);
	});

cli
	.version('1.0.0')
	.command('divide', 'divide number')
	.argument('[number ...]', 'text to print')
	.action((args, options, logger) => {
		const a = args.number.map((x) => parseFloat(x));
		const hasil = a.reduce((a, b) => a / b);
		logger.info(hasil === 0 ? '0' : hasil);
	});

cli.parse(process.argv);
