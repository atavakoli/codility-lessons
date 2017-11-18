function solution(A) {
  if (A.length === 0) {
    return 1;
  }

  var max = A.length + 1;
  
  // if A _were_ all the numbers 1 .. max, our sum would've been the below...
  var expectedSum = max * (max + 1) / 2;
  
  // ... so our missing value must be the diff between expected & actual sums
  return expectedSum - A.reduce((prev, e) => prev + e);
}

console.log(solution([]));
console.log(solution([1]));
console.log(solution([2]));
console.log(solution([1,2,3,5]));