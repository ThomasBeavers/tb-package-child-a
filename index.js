const package = require('./package.json');

exports.whoami = function () {
	console.log(`  ${package.name}@${package.version}`);
	return package;
}