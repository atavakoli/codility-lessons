function solution(A) {
  var maxEndingHere = A[0];
  var maxOverall = A[0];

  // use a dynamic solution; the max slice in A[0..i]
  // is the bigger of the max slice in A[0..i-1] and
  // the max slice of A that ends in A[i]; that latter
  // slice is either the sum of A[i] and the max slice
  // ending in A[i-1], or just A[i] if the max slice
  // ending in a[i-1] is negative

  for (let i = 1; i < A.length; ++i) {
    maxEndingHere = Math.max(maxEndingHere + A[i], A[i]);
    maxOverall = Math.max(maxOverall, maxEndingHere);
  }

  return maxOverall;
}

console.log(solution([3,2,-6,4,0]));
console.log(solution([1,2,3,-12,4,-1,5]));
