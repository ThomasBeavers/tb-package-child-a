const childA = require('./index');
const assert = require('assert').strict
const package = JSON.parse(JSON.stringify(require('./package.json')));

describe('integration test', function () {
	it('should return package from whoami', function () {
		const childAPackage = childA.whoami();
		assert.deepStrictEqual(childAPackage, package, 'package is not equal');
	})
	it('should have a v1_2 function', function () {
		assert.strictEqual(typeof (childA.v1_2), 'function');
	})
});