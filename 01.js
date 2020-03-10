let cli = require('caporal');

cli
	.version('1.0.0')
	.command('lowercase', 'print to lowercase')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		logger.info(args.print.toLowerCase());
	});
cli
	.version('1.0.0')
	.command('uppercase', 'print to uppercase')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		logger.info(args.print.toUpperCase());
	});
cli
	.version('1.0.0')
	.command('capitalize', 'print to uppercase')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		logger.info(args.print.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '));
	});

cli.parse(process.argv);
