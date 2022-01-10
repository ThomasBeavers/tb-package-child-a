const package = require('./package.json');

exports.whoami = function () {
	console.log(paclage.name, package.version);
}