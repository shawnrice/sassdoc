/* global describe, it */
'use strict';

var assert = require('assert');

describe('#parameters', function () {
  var returns = require('../../src/annotation').returns;

  it('should return an object', function () {
    assert.deepEqual(returns.parse('{type} $hyphenated-name (default) - description'), { type: 'type', name: 'hyphenated-name', default: 'default', description: 'description' });
    assert.deepEqual(returns.parse('{type} $name (()) - description'), { type: 'type', name: 'name', default: '()', description: 'description' });
    assert.deepEqual(returns.parse('{List} $list - list to check'), { type: 'List', name: 'list', description: 'list to check' });
  });

  it('should parse all chars in type', function () {
    assert.deepEqual(returns.parse('{*} $name - description'), { type: '*', name: 'name', description: 'description' });
    assert.deepEqual(returns.parse('{type|other} $name - description'), { type: 'type|other', name: 'name', description: 'description' });
  });
});