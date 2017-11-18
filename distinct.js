function solution(A) {
  var last = null;
  var count = 0;
  for (e of A.sort()) {
    if (e !== last) {
      ++count;
      last = e;
    }
  }
  return count;
}