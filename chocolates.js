'use strict';

function gcd(a, b) {
  while (true) {
    let r = a % b;
    if (r === 0) {
      return b;
    } else {
      a = b;
      b = r;
    }
  }
}

/*
 * why this works
 * --------------
 *
 * To give a more intuitive sense, take the edge cases first:
 *
 *   - gcd = 1  : they're coprime, so you'll keep wrapping around and hitting
 *                and new chocolates, eventually eating all of them,
 *                so you'll eat n / 1 = n = all chocolates
 *   - gcd = n  : you'll first eat the 0th chocolate, then wrap around (maybe
 *                after multiple laps, if m > n) right back to 0's wrapper,
 *                so you'll eat n / n = 1 chocolates
 *   - gcd = m  : m divides n, so you eat every mth chocolate, then hit the
 *                0th wrapper; that's n / m chocolates eaten
 *
 * Now the general case:
 *
 *   - gcd = ...: the chocolates you end up hitting are the same as if m were
 *                gcd in the first place, just in a different order; e.g.
 *                S(10, 4) => [0,4,8,2,6], whereas S(10, 2) => [0,2,4,6,8];
 *                S(16, 12) => [0,12,8,4], whereas (16, 4) => [0,4,8,12];
 *                so, you end up eating the same chocolates as if you ate
 *                every gcd'th chocolate in one pass and ended up back at
 *                the 0th wrapper; that's n / gcd chocolates
 *
 * To put it another way, since we start at 0, the 1st repeat position will
 * always be 0. Suppose it weren't; let's call that value X; note the
 * sequence of hits between 0 and the 1st instance of X; now, compare it to
 * the sequence of hits between 0 to the 2nd instance of X; we have two
 * conflicting ways of reaching X using the same process of adding m mod n;
 * so 0 must be the 1st repeat.
 * Therefore, we'll have hit all other elements on our way to the 2nd 0, and
 * those elements are the multiples of the gcd.
 */
function solution(n, m) {
  if (n === 0) {
    // no chocolates to eat
    return 0;
  } else if (m === 0) {
    // just ate the 0th chocolate
    return 1;
  } else {
    // see above for why this works
    return n / gcd(n, m);
  }
}

const MAX = 10;

for (let i = 0; i < 20; ++i) {
  let n, m, soln;
  do {
    n = Math.floor(Math.random() * MAX) + 1;
    m = Math.floor(Math.random() * MAX) + 1;
    soln = solution(n, m);
  } while (soln === m || soln === n);
  console.log(n, m, soln);
}
