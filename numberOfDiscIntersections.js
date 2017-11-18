function solution(A) {
  const MAX_INTERSECTIONS = 10000000;

  /*
  // the obvious solution O(N^2) is to look at each pair
  var count = 0;
  for (let i = 0; i < A.length-1; ++i) {
    for (let j = i + 1; j < A.length; ++j) {
      // if the distance is less than or equal to their
      // combined radii, then they must intersect
      if (j - i <= A[j] + A[i]) {
        ++count;
        if (count > MAX_INTERSECTIONS) {
          return -1;
        }
      }
    }
  }
  return count;
  */

  // but this won't do. do we need to check every pair?
  // how can we know when not to check? say we sort by size,
  // or sort by ... say... leftmost border. can I walk left-to-
  // right in O(N) and count all the intersections?
  // lets say I do, and say count=0, and inside=[] (indices of A's I'm in right now),
  // add inside.length to count when entering a new circle:
  // I encounter A[1], so inside=[1], count += 0;
  // I encounter A[0], so inside=[1,0], count+=1;
  // I encounter A[2], so inside=[1,0,2], count+=2;
  // I encounter A[4], so inside=[1,0,2,4], count += 3;
  // I leave     A[0], so inside=[1.2,4];
  // I encounter A[3], so inside=[1,2,4,3], count += 3;
  // I leave     A[2], so inside=[1,4,3];
  // I leave     A[3], so inside=[1,4];
  // I encounter A[5], so inside=[1,4,5], count += 2;
  // and I'm done; count = 11
  // now, how d0 I track when to leave? I can sort by rightmost border too;
  // one way to do it is put all the borders in a list of objects, then
  // sort & walk through (I don't need to
  // keep an actual list of insides, just a count

  var borders = [];
  for (let i = 0; i < A.length; ++i) {
    // type:  1 = entering a circle (left border);
    // type: -1 = leaving a circle (right border);
    // take out i for production; it's there just for debugging right now
    borders.push({ type:  1, pos: i - A[i], i: i });
    borders.push({ type: -1, pos: i + A[i], i: i });
  }

  // enter before leaving, since discs contain their borders
  borders.sort((a, b) => a.pos === b.pos ? b.type - a.type : a.pos - b.pos);

  var count = 0;
  var inside = 0;
  for (let e of borders) {
    //console.log(e.type === 1 ? 'entering' : 'leaving', e.i);
    if (e.type === 1) {
      // entering a circle: count all the intersects with the other circle's
      // we're currently inside
      count += inside;
      //console.log('increment count by ', inside, 'to', count);
      if (count > MAX_INTERSECTIONS) {
        return -1;
      }
    }
    // we've either entered or left a circle; in any case, update inside
    inside += e.type;
  }

  return count;
}

console.log(solution([1,5,2,1,4,0]));
console.log(solution([1,1,1,1,1]));
console.log(solution([1,0,1,0,1]));
console.log(solution([0,0,0,0,0]));
console.log(solution([1]));
console.log(solution([]));

// this scenario will exceed 10000000
var A = [];
for (let i = 0; i < 4473; ++i) {
  A.push(4500);
}
console.log(solution(A));
