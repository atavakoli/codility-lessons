function solution(A) {
  var bestBuy = A[0];
  var bestSell = A[0];
  var bestProfit = 0;

  for (e of A) {
    // check if a lower buy price is found
    if (e < bestBuy) {
      bestBuy = e;
    }

    // check if a higher profit price is found,
    // using the current price as the sell price
    // and the last best buy price
    if (e - bestBuy > bestProfit) {
      bestProfit = e - bestBuy;
      bestSell = e;
    }
  }

  return bestProfit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
console.log(solution([5,4,3,2,1]));
console.log(solution([2,3,4]));
console.log(solution([2,3,4,1,5]));
console.log(solution([1,5,2,3,4]));
