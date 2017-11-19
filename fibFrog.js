// return an array of unique fibonacci numbers f where 1 <= f <= n
// (excluding 0 since 0-length jumps are useless here)
function fibLessThan(n) {
  var fib = [1];

  for (let lastFib = 2; lastFib <= n; lastFib += fib[fib.length-2]) {
    if (lastFib <= n) {
      fib.push(lastFib);
    }
  }

  return fib;
}

const DEBUG = false;
function debug() {
  if (DEBUG) {
    console.log.apply(console, arguments);
  }
}

function solution(A) {
  /*
   * Using a dynamic programming solution by starting at
   * the last leaf & finding the minimum number of hops to
   * the bank or another leaf ahead that leads to the bank
   *
   * this is O(nlog(n) because the number of Fibonacci's up to
   * n is O(log(n)) due to the exponential growth of the sequence,
   * and we run through that number of Fibonacci's for every element
   * containing 1 in the array, so O(nlog(n))
   * 
   * note: we're also keeping track of the total numer of
   * paths to the bank from each leaf; this is not required,
   * but it's a nice bonus & gives a better sense of the algorithm's
   * capabilities.
   */

  var fibs = fibLessThan(A.length + 1);
  var pathsToBank = new Array(A.length);
  var fewestJumpsToBank = new Array(A.length);

  for (let i = 0; i < A.length; ++i) {
    debug(i, ':', A[i]);
  }

  debug('jump sizes worth considering:', fibs);

  for (let i = A.length-1; i >= 0; --i) {
    pathsToBank[i] = 0;
    fewestJumpsToBank[i] = Number.POSITIVE_INFINITY;
    if (A[i] === 1) {
      for (let j = 0; j < fibs.length; ++j) {
        let nextJump = i + fibs[j];
        if (nextJump === A.length) {
          pathsToBank[i] += 1;
          fewestJumpsToBank[i] = 1;

          debug('can jump from', i, 'to the bank',
                      '(jump size ' + fibs[j] + ')');
        } else if (A[nextJump] === 1) {
          pathsToBank[i] += pathsToBank[nextJump];
          fewestJumpsToBank[i] = Math.min(fewestJumpsToBank[i],
                                          fewestJumpsToBank[nextJump] + 1);

          debug('can jump from', i, 'to', nextJump,
                      '(jump size ' + fibs[j] + '), followed by at most ',
                      fewestJumpsToBank[nextJump], 'more jump(s)');
        }
      }
    }
  }

  let totalPathsToBank = 0;
  let overallFewestJumps = Number.POSITIVE_INFINITY;

  for (let j = 0; j < fibs.length; ++j) {
    let nextJump = fibs[j] - 1;
    if (nextJump === A.length) {
      totalPathsToBank += 1;
      overallFewestJumps = 1;

      debug('can jump from -1 to the bank',
                  '(jump size ' + fibs[j] + ')');
    } else if (A[nextJump] === 1 && pathsToBank[nextJump] > 0) {
      totalPathsToBank += pathsToBank[nextJump];
      overallFewestJumps = Math.min(overallFewestJumps,
                                    fewestJumpsToBank[nextJump] + 1);

      debug('can jump from -1 to', nextJump,
                  '(jump size ' + fibs[j] + '), followed by at most ',
                  fewestJumpsToBank[nextJump], 'more jump(s)');
    }
  }

  debug('A', A);
  debug('P', pathsToBank);
  debug('F', fewestJumpsToBank.map(e=>e===Number.POSITIVE_INFINITY?0:e));

  return overallFewestJumps === Number.POSITIVE_INFINITY ? -1 : overallFewestJumps;
}

console.log(solution([0,0,0,1,1,0,1,0,0,0,0]));
console.log(solution([]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([1,0,0,0]));
console.log(solution([0,1,0,0,0]));
