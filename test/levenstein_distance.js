var test = require('tap').test;
var levenstein = require('../lib/levenstein_distance');

test('Levenstein Distance', function (t) {
  t.equal(levenstein('foo', 'bar'), 3);
  t.equal(levenstein('baaar', 'bar'), 2);
  t.equal(levenstein('', 'bar'), 3);
  t.equal(levenstein('foo', ''), 3);
  t.equal(levenstein('foo', 'foo'), 0);

  t.equal(levenstein('fto', 'foo'), 1);

  // insert the 5 even numbers
  t.equal(levenstein('1234567890', '13579'), 5);

  // insert(1@L0), insert(2@L1), insert(3@L2)
  t.equal(levenstein('123123451234567890', '123451234567890'), 3);

  // replace(5@L1 -> 2@R1), insert(1@R18), insert(2@R19), insert(3@R20)
  t.equal(levenstein('153123451234567890153', '123123451234567890'), 4);

  t.equal(levenstein('react', 'fact'), 2);
  t.end();
});
