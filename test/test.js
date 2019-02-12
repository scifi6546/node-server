var assert = require('assert')
var file = require('../file.js');
var api = require('../api.js');
describe('file.load',function(){
	it('should return hello world\\n',function(){
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
});

describe('api.load',function(){
	it('should return hello world\\n',function(){
		
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
});
