// Q2. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFib(num) {
  let currentNum = 1;
  let prevNum = 0;
  let result = 0;

  while (currentNum <= num) {
    if (currentNum % 2 === 0) {
      result += currentNum;
    }
  }

  currentNum += prevNum;
  prevNum = currentNum - prevNum;

  return result;
}

sumFib(1);
sumFib(4);
sumFib(75024);
