function solution(A) {
  // use a dynamic solution; maintain two arrays of
  // maximum sums ending in i, and starting with i,
  // which will be used to find the double slice sum
  // later.

  // note that slices can be empty (i.e. sum = 0) and that
  // A[0] an A[A.length-1] are not included in any slices

  var leftMaxSums = new Array(A.length);
  leftMaxSums[0] = 0;
  for (let i = 1; i < A.length; ++i) {
    // the 0 case is for when an empty slice is the best option
    leftMaxSums[i] = Math.max(leftMaxSums[i-1] + A[i], 0);
  }

  var rightMaxSums = new Array(A.length);
  rightMaxSums[A.length-1] = 0;
  for (let i = A.length-2; i >= 0; --i) {
    // the 0 case is for when an empty slice is the best option
    rightMaxSums[i] = Math.max(rightMaxSums[i+1] + A[i], 0);
  }

  var maxSum = leftMaxSums[0] + rightMaxSums[2];
  for (let i = 1; i < A.length-1; ++i) {
    maxSum = Math.max(leftMaxSums[i-1] + rightMaxSums[i+1], maxSum);
  }

  return maxSum;
}

console.log(solution([3,2,6,-1,4,5,-1,2]));
console.log(solution([3,2,-6,4,0]));
console.log(solution([1,2,3,-12,4,-1,5]));
console.log(solution([1,2,3]));
console.log(solution([0,10,-5,-2,0]));
