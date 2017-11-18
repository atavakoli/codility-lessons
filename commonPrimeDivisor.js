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

function solution(A, B) {
  var commonPrimeDivisorCount = 0;
  for (let i = 0; i < A.length; ++i) {
    let greatestDivisor = gcd(A[i], B[i]);
    let remainingFactors = (A[i] / greatestDivisor) * (B[i] / greatestDivisor);

    console.log('+-+', A[i], B[i], 'gcd', greatestDivisor);

    while (remainingFactors !== 1) {
      let newGcd = gcd(remainingFactors, greatestDivisor);
      let next = remainingFactors / newGcd;

      console.log('| |', remainingFactors, '/', newGcd, '=', next);

      if (next === remainingFactors) {
        break;
      }

      remainingFactors = next;
    }

    if (remainingFactors === 1) {
      ++commonPrimeDivisorCount;
      console.log('| +', 'YES');
    } else {
      console.log('| +', 'NO');
    }
    console.log('|');
  }

  return commonPrimeDivisorCount;
}

var A = [];
var B = [];
for (let i = 1; i <= 100; ++i) {
  for (let j = 1; j <= 100; ++j) {
    A.push(i);
    B.push(j);
  }
}
console.log('size', A.length);
console.log('count', solution(A, B));


console.log('count', solution([72], [108]));

console.log('count', solution([15,10,3], [75,30,5]));