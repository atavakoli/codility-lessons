function solution(A) {
  // the missing number has to be between 1..A.length+1,
  // so maintain a bitmask (boolean array here for simplicity)
  // of all such entries
  var candidates = new Array(A.length + 1);
  for (let e of A) {
    if (e <= A.length) {
      candidates[e-1] = true;
    }
  }
  
  // now, just find the first missing one
  for (let i = 0; i < candidates.length; ++i) {
    if (!candidates[i]) {
      return i + 1;
    }
  }
  
  // note that because candidates is of size A.length + 1, and we
  // only put entries in indices < A.length, the last entry will always
  // be unfillled, so the above will always return
}

console.log(solution([4,1,2,5]));
console.log(solution([1,2,3]));
console.log(solution([]));
console.log(solution([-1,-3]));
console.log(solution([2]));
