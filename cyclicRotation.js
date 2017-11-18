function solution(A, K) {
  // why isn't performance considered?...
  
  var n = A.length;

  // this change lets it work with negative K too
  K = ((K % n) + n) % n;
  
  // making a copy of A, since it doesn't say A can be modified
  let newA = new Array(n);
  
  for (let i = 0; i < n; ++i) {
    newA[(i + K) % n] = A[i];
  }
  
  return newA;  
}

console.log(solution([1,2,3,4,5], 3));