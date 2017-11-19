function solution(A, B) {
  var downstream = [];
  var remainingFish = A.length;
  for (let i = 0; i < A.length; ++i) {
    if (B[i] === 1) {
      downstream.push(A[i]);
      //console.log(A[i], 'swimming downstream');
    } else {
      //console.log(A[i], 'swimming upstream');
      while (downstream.length) {
        let downFish = downstream.pop();
        //console.log('upstream fish', A[i], ' and downstream fish', downFish, 'collide');

        // either the upstream fish (A[i]) or the downstream
        // fish (downFish) will be eaten
        --remainingFish;

        if (downFish > A[i]) {
          //console.log('downstream fish', downFish, ' ate upsream fish', A[i]);
          downstream.push(downFish);
          break;
        } else {
          //console.log('downstream fish', downFish, ' eaten by upsream fish', A[i]);
        }
      }
    }
  }
  return remainingFish;
}

console.log(solution([4,3,2,1,5], [0,1,0,0,0]));
console.log(solution([4,3,2,1,5], [0,0,0,0,0]));
console.log(solution([4,3,2,1,5], [1,1,1,1,1]));
console.log(solution([3,4,5,1,2], [0,0,0,1,1]));
console.log(solution([1,4,2,3,5], [1,1,1,0,0]));
