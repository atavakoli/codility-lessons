function solution(H) {
  var stack = [];
  var blockCount = 0;

  for (let height of H) {
    //if the next height is lower than the current baseline,
    // a new block is needed; keep removing baselines until
    // it's either level with or below the next height
    while (stack.length && stack[stack.length-1] > height) {
      ++blockCount;
    }

    // push the new height as a new baseline (provided it's strictly
    // above the current baseline)
    if (stack.length === 0 || stack[stack.length-1] < height) {
      stack.push(height);
    }
  }

  return blockCount + stack.length;
}

console.log(solution([8,8,5,7,9,8,7,4,8]));
console.log(solution([1,2,3,4]));
console.log(solution([1,2,3,2,1]));
console.log(solution([1,2,3,2,1,1,1]));
console.log(solution([1,1,1,1]));
console.log(solution([1,2,2,1]));
console.log(solution([1,2,1,2,1]));