var assert = require('assert')
var file = require('../file.js');
var api = require('../api.js');
file.BaseDir="test/files/";
describe('file',function(){
	it('should return hello world\\n',function(){
		assert.equal(file.load('test/files/test.txt'),'hello world\n');});
	it('Testing Read Files',function(){
		
		assert.equal(String(file.readDir('')),String(['test.txt','test2.txt']));});

});

describe('api.lsFiles',function(){
	it('should return hello world\\n',function(){
		
		assert.equal(api.lsFiles(),
			toString({"files":['test.txt','test2.txt']}));});
});
