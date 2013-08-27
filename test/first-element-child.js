
describe('first-element-child', function () {
  var first = require('first-element-child'),
      assert = require('assert');

  var div = document.getElementById('fixture');

  beforeEach(function () {
    div.innerHTML = [
      ' hello world',
      ' <span class=one>span1</span>',
      ' cool stuff',
      ' <span class=two>span2</span>'
    ].join('');
  });

  it('should return the first element child', function () {
    assert(first(div) == div.querySelector('.one'));
  });
});
