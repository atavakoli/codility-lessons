function solution(A) {
  // sort and then check contiguous triplets, comparing the
  // sum of the two smallest to the one largest; this works
  // because of the following argument: suppose you have
  // a triangular triplet A[i] + A[j] > A[k], i < j < k;
  // if there's an l where A[i] <= A[l] <= A[j], i < l < j, then
  // A[l] + A[j] > A[k] also holds so that's another triplet;
  // similar argument holds for an element A[m] such that
  // A[i] + A[m] > A[k] where l < m < k; so, if a set has any
  // triangular triplets (contiguous or not), then a contiguous
  // triangular triplet must (also) exist.
  A.sort((a, b) => a-b);
  for (let i = 2; i < A.length; ++i) {
    if (A[i-2] + A[i-1] > A[i]) {
      return 1;
    }
  }
  return 0;
}

console.log(solution([10, 3,2,1,5, 10]));