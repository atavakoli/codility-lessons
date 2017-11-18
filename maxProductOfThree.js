function solution(A) {
  var n = A.length;

  // sort in ascending order
  A.sort((a, b) => a - b);

  // console.log(A);

  if (A[0] < 0 && A[1] < 0 && A[n-1] > 0) {
    // if first two are negative, then then their product is positive, and
    // if there are any non-negative numbers, that product times the greatest
    // non-negative may be the max
    return Math.max(A[0]   * A[1]   * A[n-1],
                    A[n-1] * A[n-2] * A[n-3]);
  } else {
    return Math.max(A[0]   * A[1]   * A[2],
                    A[n-1] * A[n-2] * A[n-3]);
  }
}

console.log(solution([-2,1,2,-2,5,6]));
console.log(solution([-5,1,2,-6,5,6]));
console.log(solution([-6,-5,-3,6,6,7]));
console.log(solution([-6,-5,-4,-3,-2,-1]));