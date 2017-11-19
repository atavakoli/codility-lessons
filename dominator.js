function solution(A) {
  var n = A.length;

  // find the candidate dominator

  var count = 1;
  var candidate = A[0];
  var candidateIdx = 0;

  for (let i = 1; i < n; ++i) {
    if (candidate === A[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      candidate = A[i];
      candidateIdx = i;
      count = 1;
    }
  }

  // confirm if the candidate dominator is an actual dominator

  count = 0;
  for (let e of A) {
    if (e === candidate) {
      ++count;
    }
  }

  return (count <= n / 2) ? -1 : candidateIdx;
}

console.log(solution([3,4,3,2,3,-1,3,3]));
console.log(solution([]));
console.log(solution([1,1,1,2,2,2]));
console.log(solution([1,2,1,2,1]));
console.log(solution([1,2,3,2,1]));
console.log(solution([2,1,2,3,2,1,2]));
