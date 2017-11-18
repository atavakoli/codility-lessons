'use strict';

function solution(a) {
	var max = 0;
	var freqs = {};
	for (let e of a) {
		max = Math.max(max, e);

		if (!freqs.hasOwnProperty(e)) {
			freqs[e] = 0;
		}
		++freqs[e];
	}

	var divisorCounts = new Array(max + 1);
	for (let i = 0; i <= max; ++i) {
		divisorCounts[i] = a.length;
	}

	// or use ES2016 Object.entries
	for (let e of Object.keys(freqs)) {
		let divisor = +e;
		let count = freqs[e];
		for (let i = divisor; i <= max; i += divisor) {
			divisorCounts[i] -= count;
		}
	}

	return a.map(e => divisorCounts[e]);
}

function randoTest() {
	var n = Math.floor(Math.random() * 50000) + 1;
	var a = [];
	for (let i = 0; i < n; ++i) {
		a.push(Math.floor(Math.random() * 2*n) + 1);
	}
	return a;
}
function seqTest() {
	var a = [];
	for (let i = 1; i <= 50000; ++i) {
		a.push(i);
	}
	return a;
}

function sameTest() {
	var a = [];
	var val = 1;
	for (let i = 1; i <= 50000; ++i) {
		a.push(val);
	}
	return a;
}

var start = process.hrtime();
console.log(solution([3,1,2,3,6]));
console.log(solution([1]));
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(randoTest()).length);
console.log(solution(seqTest()).length);
console.log(solution(sameTest()).length);
console.log(process.hrtime(start));