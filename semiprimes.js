'use strict';

// return [primes, sieve] where primes is the array of
// all primes equal to or below n, and sieve is the
// corresponding Sieve of Eratothenes with range [0 .. n]
function primesBelow(n) {
  var sieve = new Array(n+1);
  var primes = [];

  for (let i = 0; i < sieve.length; ++i) {
    sieve[i] = true;
  }
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= n;) {
    primes.push(i);

    for (let j = i + i; j <= n; j += i) {
      sieve[j] = false;
    }

    while (!sieve[++i] && i <= n);
  }

  return [primes, sieve];
}

// returns the array of semiprimes below or equal to n
function semiprimesBelow(n) {
  // we use n/2 here instead of Math.sqrt(n) because we need
  // the sieve to be as big as n/2, even though primes
  // needs only to go up to Math.sqrt(p)
  var [primes, sieve] = primesBelow(Math.ceil(n / 2));
  var semiprimes = [];

  for (let i = 4; i <= n; ++i) {
    for (let p of primes) {
      // if i / p is in the sieve, then p divides i, and
      // i / p is the only other factor (because it's prime)
      if (sieve[i / p]) {
        semiprimes.push(i);
        break;
      } else if (p * p > i) {
        break;
      }
    }
  }

  return semiprimes;
}

// return an array a[0 .. n] where a[i] is the number of
// semiprimes below or equal to i.
function semiprimeCountsBelow(n) {
  var semiprimes = semiprimesBelow(n+1);
  var counts = new Array(n);

  var currCount = 0;
  var semiprimeIdx = 0;
  for (let i = 0; i <= n; ++i) {
    // every time you encounter a new semiprime,
    // increase the cumulative count & await the
    // next semiprime to be encountered
    if (i >= semiprimes[semiprimeIdx]) {
      semiprimeIdx++;
      currCount++;
    }
    counts[i] = currCount;
  }

  return counts;
}

function solution(n, p, q) {
  var semiprimeCounts = semiprimeCountsBelow(n);
  var results = [];

  var length = p.length;
  for (let i = 0; i < length; ++i) {
    // the number of semiprimes is the difference of the cumulative
    // counts (the p[i]-1 is necessary because if p[i] is semiprime,
    // it's already counted in semiprimeCoutnts[q[i]], so we look one
    // before it to avoid double-counting)
    results.push(semiprimeCounts[q[i]] - semiprimeCounts[p[i] - 1]);
  }

  return results;
}

console.log(solution(26, [1,4,16, 4], [26,10,20, 4]));
