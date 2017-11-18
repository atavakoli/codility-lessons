function solution(A) {
  var mask = 0;
  
  // This works because a XOR b XOR a === b, and that XOR is commutative, so any
  // set of pairs XORed together in any order === 0; and, 0 XOR x === x; therefore,
  // any set of pairs XORed together along with any x, in any order, === x
  for (let e of A) {
    mask ^= e;
  }
  
  return mask;
}

console.log(solution([9,3,7,3,9]));