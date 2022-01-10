const package = require('./package.json');

exports.whoami = function () {
	console.log(`  ${package.name}@${package.version}`);
	return package;
}

exports.v1_2 = function () {
	console.log('1.2');
}