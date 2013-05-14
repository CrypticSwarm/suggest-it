module.exports = distance;

function distance(a, b) {
  var table = [];
  if (a.length === 0 || b.length === 0) return Math.max(a.length, b.length);
  for (var ii = 0; ii !== a.length; ++ii) {
    table[ii] = [];
    for (var jj = 0; jj !== b.length; ++jj) {
      if (ii === 0 && jj === 0) table[ii][jj] = Number(a[ii] !== b[jj]);
      else if (ii === 0 || jj === 0) table[ii][jj] = Math.max(ii, jj);
      else {
        var diagPenalty = Number(a[ii] !== b[jj]);
        var diag = table[ii - 1][jj - 1] + diagPenalty;
        var top = table[ii - 1][jj] + 1;
        var left = table[ii][jj - 1] + 1;
        table[ii][jj] = Math.min(left, top, diag);
      }
    }
  }
  return table[a.length - 1][b.length - 1];
}

