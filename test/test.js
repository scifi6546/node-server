var assert = require('assert')
var file = require('../file.js');
describe('file.load',function(){
	it('should return hello world\\n',function(){
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
});
