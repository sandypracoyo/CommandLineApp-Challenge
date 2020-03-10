let cli = require('caporal');
const webshot = require('webshot-node');
cli
	.version('1.0.0')
	.command('screenshot', 'Screenshot Web')
	.argument('<print>', 'text to print', cli.STRING)
	.action((args, options, logger) => {
		webshot(args.print, 'screenshoot-001.png', function(err) {
			if (err) {
				return console.log(err);
			}
			console.log('image screenshot success');
		});
	});

cli.parse(process.argv);
