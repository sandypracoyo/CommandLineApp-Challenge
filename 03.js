let cli = require('caporal');

cli
	.version('1.0.0')
	.command('palindrome', 'Check palindrome')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		const a = args.print.toLowerCase().replace(/[\W_]/g, '');
		const b = a.split('').reverse('').join('');
		logger.info(
			a !== b ? `String : ${args.print} \nIs Palindrome? No` : `String : ${args.print} \nIs Palindrome? Yes`
		);
	});

cli.parse(process.argv);
