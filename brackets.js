function solution(S) {
  var stack = [];
  for (let s of S) {
    switch (s) {
    case '{':
    case '[':
    case '(':
      stack.push(s);
      continue;
    case '}':
      if (stack[stack.length-1] !== '{') {
        return 0;
      }
      break;
    case ']':
      if (stack[stack.length-1] !== '[') {
        return 0;
      }
      break;
    case ')':
      if (stack[stack.length-1] !== '(') {
        return 0;
      }
      break;
    default:
      // if it's none of the above, we have a bad string
      return 0;
    }

    // only reach here after seeing a good closing bracket
    stack.pop();
  }

  return stack.length ? 0 : 1;
}

console.log(solution(''));
console.log(solution('{[()()]}'));
console.log(solution('([)()]'));
console.log(solution('{{{'));
