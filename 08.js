let cli = require('caporal');
const request = require('request');
const cheerio = require('cheerio');

cli.version('1.0.0').command('headlines', 'Get headlines from kompas').action((args, options, logger) => {
	const url = 'https://www.kompas.com/';

	request(url, (err, res, html) => {
		if (!err) {
			let $ = cheerio.load(html);
			for (let i = 0; i < $('.headline__big__link').length; i++) {
				console.log('Title : ' + $('.headline__big__title')[i].children[0].data);
				console.log('Url : ' + $('.headline__big__link')[i].attribs.href);
			}
		}
	});
});

cli.parse(process.argv);
