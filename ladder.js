function solution(A, B) {
	var maxRungs = 0;
	for (let e of A) {
    maxRungs = Math.max(e, maxRungs);
	}

  var mask = (1 << Math.max.apply(null, B)) - 1;

  // waysToClimb[i] = number of ways to climb a ladder of height i
  var waysToClimb = new Array(maxRungs + 1);

  waysToClimb[0] = 0;  // there are no ways to climb a nonexistent ladder
  waysToClimb[1] = 1;  // 1 rung: take 1 step
  waysToClimb[2] = 2;  // 2 rungs: either take 2 steps, or 1 big step

  // for a ladder of height i, the number of ways to get to the
  // last rung (and then take 1 step up) + the ways to get to the
  // second last rung (and then take 2 steps up)
  for (let i = 3; i <= maxRungs; ++i) {
    waysToClimb[i] = (waysToClimb[i-1] + waysToClimb[i-2]) & mask;
  }

  // console.log(waysToClimb);

  return A.map((e, i) => waysToClimb[e] % (1 << B[i]));
}

console.log(solution([4,4,5,5,1],[3,2,4,3,1]));

function randList(n, low, high) {
  var result = new Array(n);
  for (let i = 0; i < n; ++i) {
    result[i] = Math.floor(Math.random() * (high - low)) + low;
  }
  return result;
}


console.log(solution(randList(100, 1, 50000), randList(100, 1, 30)));