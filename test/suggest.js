var test = require('tap').test;
var createSuggest = require('../lib/suggest-it');

test('Suggest an alternative', function (t) {
  var suggest = createSuggest(['food', 'fact', 'face']);
  t.equal('food', suggest('foot'));
  t.equal('food', suggest('foo'));
  t.equal('fact', suggest('tact'));
  t.equal('fact', suggest('react'));
  t.end();
});
