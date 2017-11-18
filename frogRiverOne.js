function solution(X, A) {
  // note: X is reused as a decrementing counter of un-leaf'ed
  // spots in the river

  // maintain an index of already leaf'd spots, where
  // spots[i] === true iff it has a leaf in it
  var spots = new Array(X);

  for (let i = 0; i < A.length; ++i) {
    if (!spots[A[i]]) {
      // decrement X; if there are no more un-leaf'd spots left, exit
      if (--X === 0) {
        return i;
      }
      spots[A[i]] = true;;
    }
  }

  return -1;
}

console.log(solution(5, [1,3,1,4,2,3,5,4]));