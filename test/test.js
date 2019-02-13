var assert = require('assert')
var file = require('../file.js');
var api = require('../api.js');
describe('file',function(){
	it('should return hello world\\n',function(){
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
	it('Testing Read Files',function(){
		file.BaseDir="test/files/";
		assert.equal(String(file.readDir('')),String(['test.txt','test2.txt']));});

});

describe('api.load',function(){
	it('should return hello world\\n',function(){
		
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
});
