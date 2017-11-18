function wrongSolution(A) {
  // using a caterpillar walk approach, moving P & Q in a
  // greedy way to improve the average, keeping track of the
  // best avg so far
  
  var p = 0, q = 1;
  var sum = A[p] + A[q];
  var avg = sum / (q - p + 1);
  var minAvg = avg;
  var minP = p, minQ = q;

  while (p < A.length-2) {
    if (p === q - 1) {
      sum += A[++q];
    } else if (q === A.length-1) {
      sum -= A[p++];
    } else {
      if (A[p] - avg > avg - A[q+1]) {
        //console.log('removing p is a better move', avg, 'removing ' + A[p], ' vs adding ' + A[q+1]);
        sum -= A[p++];
      } else {
        //console.log('adding q is a better move', avg, 'adding ' + A[q+1], ' vs removing ' + A[p]);
        sum += A[++q];
      }
    }

    avg = sum / (q - p + 1);
    if (avg < minAvg) {
        minAvg = avg;
        minP = p;
        minQ = q;
        //console.log('new best avg', avg, 'at', p, q, A.slice(p,q+1));
    }
    //console.log(p, q, A.slice(p,q+1), avg); 
  }
  
  console.log('S1 minAvg', minAvg, 'at', A.slice(minP, minQ+1));
  return minP;
}

function solution(A) {
  // using a caterpillar walk approach, moving P & Q in 2-/3-sized slices,
  // since any slice can be decomposed into smaller slices of size 2 or 3
  // where one of those sub-slices has an avg at least as small as the whole
  
  var p = 0, q = 1;
  var sum = A[p] + A[q];
  var avg = sum / (q - p + 1);
  var minAvg = avg;
  var minP = p, minQ = q;

  while (p < A.length-2) {
    if (q - p === 1) {
      sum += A[++q];
    } else {
      sum -= A[p++];
    }

    avg = sum / (q - p + 1);
    if (avg < minAvg) {
        minAvg = avg;
        minP = p;
        minQ = q;
        //console.log('new best avg', avg, 'at', p, q, A.slice(p,q+1));
    }
    //console.log(p, q, A.slice(p,q+1), avg); 
  }
  
  console.log('S2 minAvg', minAvg, 'at', A.slice(minP, minQ+1));
  return minP;
}

console.log(wrongSolution([4,2,2,5,1,5,8]), solution([4,2,2,5,1,5,8]));

for (let i = 0; i < 100; ++i) {
  let A = new Array(100);
  for (let j = 0; j < 100; ++j) {
    A[j] = Math.floor(Math.random() * 20000) - 10000
  }
  console.log(wrongSolution(A) === solution(A));
}