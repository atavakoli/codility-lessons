function drawFlags(a, peaks, flags) {
  var maxHeight = 0;
  for (let i = 0; i < a.length; ++i) {
    maxHeight = Math.max(a[i], maxHeight);
  }

  for (let h = maxHeight + 1; h > 0; --h) {
    var line = '';
    for (let i = 0; i < a.length; ++i) {
      if (h < a[i]) {
        line += '*';
      } else if (h === a[i]) {
        if (peaks.indexOf(i) >= 0) {
          line += '.';
        } else {
          line += '*';
        }
      } else if (h === a[i] + 1 && flags.indexOf(i) >= 0) {
        line += 'F';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

function flags(a) {
  var peaks = [];
  var nextPeak = new Array(a.length);

  console.log();
  console.log('['+a.join(',')+']');

  nextPeak[a.length-1] = null;
  for (let i = a.length-2; i > 0; --i) {
    if (a[i-1] < a[i] && a[i] > a[i+1]) {
      peaks.unshift(i);
      nextPeak[i] = i;
    } else {
      nextPeak[i] = nextPeak[i+1];
    }
  }
  nextPeak[0] = nextPeak[1];

  console.log('peaks', peaks.join(','), 'heights', peaks.map(e => a[e]).join(','));

  if (peaks.length < 2) {
    return peaks.length;
  } else {
    let maxFlags = Math.ceil(Math.sqrt(peaks[peaks.length-1] - peaks[0]));

    for (; maxFlags > 0; --maxFlags) {
      let remainingFlags = maxFlags - 1;
      let lastFlag = 0;
      let flags = [peaks[0]];

      for (let i = 1; i < peaks.length; ++i) {
        if (peaks[i] - peaks[lastFlag] >= maxFlags) {
          lastFlag = i;
          flags.push(peaks[i]);
          --remainingFlags;
          if (remainingFlags === 0) {
            console.log('planted', maxFlags, 'flags at', flags);
            drawFlags(a, peaks, flags);
            return maxFlags;
          }
        }
      }
    }
  }
}

/*
for (let i = 0; i < 10; ++i) {
  let a = [];
  let width = Math.floor(Math.random() * 62) + 10;
  for (let j = 0; j < width; ++j) {
    a.push(Math.floor(Math.random() * 10) + 1);
  }
  console.log('['+a.join(',')+']');
  flags(a);
}
*/

flags([6,7,6,1,2,5,3,8,9,2]);
flags([1,3,3,6,5,7,6,1,3,6,5,5,6,10,4,2,10,9,8,4,6,8,4,8,3,4,5,3,9,2,1,1,9,10,1,1,3,5,2,5,4,7,3,7,4,1,3,4,1,7,8,9,5,8,8,7,6,10,2]);
flags([9,7,9,4,10,8,8,4,8,2,4,1,4,1,3,4,1,8,1,10,7,9,3,1,5,7,9,10,3,5,2,9,2,5,2,4,1,9,4,2,10,10,3,9,10,5,6,2,8,4,9,8,10,3,3,3]);
flags([6,8,8,7,3,1,2,8,6,5,9,8,6,10,2,8,3,1,6,9,9,5,4,2]);
flags([6,4,7,1,3,4,9,5,6,9,1,4,5,4,5,1,3,7,2,5,6,5,10,9,2,9,1,9,1,6,6,6,7,4,1]);
flags([8,1,6,2,1,3,3,9,9,3,7,8,6,5,9,3,9,5,8,3,5,8,7,7,2,2,1,2,9,3,10,3,10,9,5,4,8,4,8,8,10,10,10,7,4,5,8,3,3,1,1,3,10,4,6,10,9,8,4,6,9,3,4,2,1]);
flags([1,1,1,5,3,1,3,3,9,4,10,6,2,8,2,2,3]);
flags([2,3,8,3,10,4,2,2,4,10,2,5,9,7,1,7,3,10,3,5,1,2,10,3,5,3,7,8,10,2,8,3,9,4,3,10,8,8,4,6,5]);
flags([8,2,3,2,8,9,3,1,1,3,9,1,1,4,3,7,2,10,4,7,5,10,5,7,9,9,5,2,7,9,1,5,5,3,2,5,4,2,7,7,10,2,3,2,6,3,1,2,1,2,8,3,8,10,4,10,4,1,3]);
flags([7,7,9,10,8,10,1,7,2,2,4,1,10,2,5,4,3,3,8,5,1,4,7,10,1]);


console.log(flags([
  1,
  5,
  3,
  4,
  3,
  4,
  1,
  2,
  3,
  4,
  6,
  2
]));
