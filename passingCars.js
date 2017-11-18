function solution(A) {
  var eastwardCars = 0;
  var totalPasses = 0;

  // imagine it like this, the westmost eastward car
  // (at the lowest index in A) move first; if it
  // passes a westward car, take note & keep it moving.
  // if it reaches an eastward car, they join together
  // and continue east; now the next westward car passed
  // is passing 2 eastward cars. keep going until all eastward
  // cars have combined & passed all westward cars  
  for (let e of A) {
    if (e === 0) {
      ++eastwardCars;
    } else {
      totalPasses += eastwardCars;
    }
  }
  return totalPasses > 1000000000 ? -1 : totalPasses;
}

console.log(solution([0,1,0,1,1]));