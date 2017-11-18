function solution(S, P, Q) {
  var closestBelow = new Array(S.length);
  var lastSeen = [-1, -1, -1, -1];

  // maintain a table of the positions of the closest instances
  // of each impact factor below or equal to the current position.
  // note that this implies every lastSeen has exactly one entry with
  // value i (its own impact factor)
  for (let i = 0; i < S.length; ++i) {
    let impactFactor;
    switch (S.charAt(i)) {
    case 'A':
      impactFactor = 0;
      break;
    case 'C':
      impactFactor = 1;
      break;
    case 'G':
      impactFactor = 2;
      break;
    case 'T':
      impactFactor = 3;
      break;
    }
    // note that impactFactor is zero-based here, but needs
    // to be returned 1-based later on
    lastSeen[impactFactor] = i;
    
    // copy the lastSeen array for this position
    closestBelow[i] = [...lastSeen];
  }

  // for each query, find the smallest impact factor in range,
  // using the table, and return it
  return Q.map((q, i) => {
    let p = P[i];
    let lastSeen = closestBelow[q];
    // find the 1st (and therefore smallest) impact factor
    // below Q whose position is not beyond P; there must be
    // one, since every instance of lastSeen has in the worst-case
    // an entry equal to i
    for (let j = 0; j < lastSeen.length; ++j) {
      if (lastSeen[j] >= p) {
        return j + 1;
      }
    }
  });
}

console.log(solution('CAGCCTA', [2,5,0], [4,5,6]));