function solution(A) {
  var sorted = new Array(A.length);

  // I can do a sort of radix sort
  for (let i = 0; i < A.length; ++i) {
    sorted[A[i] - 1] = A[i];
  }
  
  for (let i = 0; i < sorted.length; ++i) {
    if (sorted[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}

console.log(solution([4,1,2,3]));
console.log(solution([4,1,3]));
console.log(solution([1]));
console.log(solution([2]));
console.log(solution([1,1]));
console.log(solution([1,2]));
console.log(solution([2,1]));