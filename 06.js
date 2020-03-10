let cli = require('caporal');
let os = require('os');

cli.version('1.0.0').command('ip', 'Your ip address').action((args, options, logger) => {
	logger.info(os.networkInterfaces().wlp3s0[0].address);
});

cli.parse(process.argv);
