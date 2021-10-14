// Q3. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  function isPrime(val) {
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i == 0) return false;
    }

    return true;
  }

  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

sumPrimes(10);
sumPrimes(997);
sumPrimes(75024);
