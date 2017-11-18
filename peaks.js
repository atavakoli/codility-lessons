'use strict';

function outputPartitions(a, blockSize, prevPeak) {
  let partitions = a.reduce((prev, e, idx) => {
    if (idx % blockSize === 0) {
      prev.push([]);
    }
    if (prevPeak[idx] === idx) {
      prev[prev.length-1].push('<' + e + '>');
    } else {
      prev[prev.length-1].push(e);
    }
    return prev;
  }, []);

  console.log('partitions', partitions.map(e => '[' + e.join(', ') + ']'));
}

function solution(a) {
  var aLength = a.length;
  var factors = [];
  var prevPeak = new Array(aLength);

  console.log();
  console.log('[' + a.join(',') + ']');

  if (aLength < 3) {
    // anything with < 3 elements can't have a peak
    console.log(0);
    return 0;
  }

  // find the factors <= sqrt(a.length)
  for (let i = 1; i*i <= aLength; ++i) {
    if (aLength % i === 0) {
      factors.push(i);
    }
  }

  // add the symmetric factors (note factors are in increasing size)
  factors = factors.concat(factors.map(e => aLength / e).reverse());

  // find the peaks and mark the left-hand closest peaks for each element
  prevPeak[0] = null;
  for (let i = 1; i < aLength - 1; ++i) {
    if (a[i-1] < a[i] && a[i] > a[i+1]) {
      prevPeak[i] = i;
    } else {
      prevPeak[i] = prevPeak[i-1];
    }
  }
  prevPeak[aLength-1] = prevPeak[aLength-2];

  console.log(factors, prevPeak);

  for (let factor of factors) {
    // console.log('factor', factor);
    // i will be one past the last element of the current block being inspected;
    // e.g. for blocks of size 3, i == 6 means we're looking at indices [3,4,5]
    let done = true;
    for (let i = factor; i <= aLength; i += factor) {
      let peak = prevPeak[i-1];
      if (peak === null || peak < i - factor) {
        // no peak in this block; try another factor

        //console.log('no peak in ', a.slice(i-factor, i));

        done = false;
        break;
      }
    }

    if (done) {
      outputPartitions(a, factor, prevPeak);
      console.log(aLength / factor);
      return aLength / factor;
    }
  }

  // there were no peaks
  console.log(0);
  return 0;
}

/*
for (let i = 0; i < 10; ++i) {
  let a = [];
  let width = Math.floor(Math.random() * 62) + 10;
  for (let j = 0; j < width; ++j) {
    a.push(Math.floor(Math.random() * 10) + 1);
  }
  console.log('['+a.join(',')+']');
  //console.log(solution(a));
}
*/

solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]);

solution([3,5,10,6,4,10,10,10,8,6,1,9,2,3,8,2]);
solution([1,9,4,10,3,10,4,9,7,4,6,9,3,8,8,6,6,7,8,9,3,2]);
solution([1,5,8,2,2,5,9,10,3,5,9,2,4,6,7,3,2,3,7,7,4]);
solution([10,1,6,9,2,7,1,1,2,9,7,2,7,7,8,7,10,10,7]);
solution([5,9,1,1,1,8,8,1,6,1,4,4,8,5,2,10,8,8,6,7,3,7,10,2,10,6,5,8,8,1,8,1,10,3,6]);
solution([4,1,5,2,4,8,2,10,8,4,7,1,4,2,10,9,10,7,6,9,10,1,2,8,10,9,4,3,6,8,8,10,6,7]);
solution([3,6,6,4,8,8,3,8,4,9,8,6,8,9,4,10,9,4,3,4,2,4,8,5,8,5,3,1,8,9,7,3,8,9,8,8,1,8,6,6,8,7,10,4,1,10,6,6,2,6,4,6,4,4]);
solution([7,2,6,3,10,7,9,10,5,3,9,4,1,9,2,3,8,1,4,10,9,10,9,3,10,1]);
solution([6,4,5,2,10,8,4,9,8,2,4,1,6,4,1,10,9,10,3,8,9,4,7,10,8,5]);
solution([1,1,10,10,3,8,3,4,6,6,8,8,2,1,1,10,8,3,3,1,6,10,3,10,4,3,6]);
solution([1,2,3,4,5,6,5]);
solution([1,2,3,4,5,6,7]);
solution([]);
solution([1]);
solution([1,2]);
solution([1,2,3]);
solution([1,3,2]);
