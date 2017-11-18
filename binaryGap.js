function solution(N) {
  var currGap = 0;
  var largestGap = 0;

  var debugBinary = '';

  // move to start of first gap    
  while (!(N & 1)) {
    debugBinary = '0' + debugBinary;
    N = N >> 1;
  }
  
  // whenever a 0 is encountered, increment the gap size
  // whenever a 1 is encountered, check for new max gap & reset the gap size
  for (; N !== 0; N = N >> 1) {
    debugBinary = (N & 1 ? '1' : '0') + debugBinary;
    if ((N & 1) === 0) {
      currGap++;
    } else {
      largestGap = Math.max(largestGap, currGap);
      currGap = 0;
    }
  }
  
  console.log(debugBinary);
  return largestGap;
}

console.log(solution(1041));
console.log(solution(15));
console.log(solution(68));