function solution(A) {
  var leftSum = A[0];
  var rightSum = A.slice(1).reduce((prev, e) => e + prev);
  var minDiff = Math.abs(leftSum - rightSum);
 
  // just shift values from the right set to the left set
  // and check the new min 
  for (let i = 1; i < A.length - 1; ++i) {
    leftSum += A[i];
    rightSum -= A[i];
    minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
  }
  
  return minDiff;
}