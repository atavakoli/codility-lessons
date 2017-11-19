function solution(A) {
  var n = A.length;

  // find the candidate leader

  var count = 1;
  var candidate = A[0];

  for (let i = 1; i < n; ++i) {
    if (candidate === A[i]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      candidate = A[i];
      count = 1;
    }
  }

  // confirm if the candidate leader is an actual leader

  count = 0;
  for (let e of A) {
    if (e === candidate) {
      ++count;
    }
  }

  if (count < n / 2) {
    return 0;
  }

  // slice the array at each position & check if each half also has
  // the found leader as its leader (each slice has any leader, it
  // must be the same as A's leader)

  // console.log('leader is', candidate, 'with', count, 'instances');

  var leftCount = 0;
  var rightCount = count;
  var equiLeaderCount = 0;

  for (let i = 1; i < n; ++i) {
    if (A[i-1] === candidate) {
      // console.log('moving leader at', i)
      ++leftCount;
      --rightCount;
    }

    // console.log(A.slice(0, i),
    //             A.slice(i),
    //             leftCount + ' vs ' + (i / 2) + ', ' +
    //             rightCount + ' vs ' + ((n - i) / 2));

    if (leftCount > i / 2 && rightCount > (n - i) / 2) {
      // console.log('new equileader found at', i-1);
      ++equiLeaderCount;
    }
  }

  return equiLeaderCount;
}

console.log(solution([4,3,4,4,4,2]));
console.log(solution([2,4,4,4,3,4]));
