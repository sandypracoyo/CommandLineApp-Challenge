let cli = require('caporal');
cli
	.version('1.0.0')
	.command('obfuscate', 'Obfuscate')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		const input = args.print;
		let bytes = [];
		for (let i = 0; i < input.length; i++) {
			bytes.push(`&#${input.charCodeAt(i)};`);
		}
		const hasil = bytes.join('');
		logger.info(hasil);
	});

cli.parse(process.argv);
