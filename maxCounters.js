function solution(N, A) {
  // initialize counters to 0
  var counters = new Array(N);
  for (let i = 0; i < N; ++i) {
    counters[i] = 0;
  }
  
  // define a baseline so we don't increment
  // every counter on every "max counter" op; just
  // maintain what the current max should  be, and
  // either increase the counter past the baseline the
  // next time you increment it, or set it to the baseline
  // at the end if it was never incremented again after the
  // last "max counter" op
  var baseline = 0;

  // maintain a max counter, so that we don't have to find
  // the max on every "max counter" op
  var currMax = 0;

  for (let e of A) {
    if (1 <= e && e <= N) {
      if (counters[e-1] < baseline) {
        counters[e-1] = baseline + 1;
      } else {
        ++counters[e-1];
      }
      currMax = Math.max(currMax, counters[e-1]);
    } else {
      baseline = currMax;
    }
  }
  
  // set every counter to be at least the baseline, in case it
  // was never incremented since the last "max counter" op
  for (let i = 0; i < N; ++i) {
    if (counters[i] < baseline) {
      counters[i] = baseline;
    }
  }
  
  return counters;
}

console.log(solution(5, [3,4,4,6,1,4,4]));