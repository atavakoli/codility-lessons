function solution(S) {
  var stack = [];
  for (let s of S) {
    switch (s) {
    case '(':
      stack.push(s);
      break;
    case ')':
      if (!stack.length) {
        return 0;
      }
      stack.pop();
      break;
    default:
      // if it's none of the above, we have a bad string
      return 0;
    }
  }

  return stack.length ? 0 : 1;
}

console.log(solution(''));
console.log(solution('()'));
console.log(solution('(())'));
console.log(solution('()()'));
console.log(solution('(()'));
console.log(solution('())'));
console.log(solution('()('));
console.log(solution('(('));
console.log(solution('))'));
console.log(solution('('));
console.log(solution(')'));
console.log(solution(')('));
