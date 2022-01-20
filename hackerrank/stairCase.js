function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let newN = n - i;

    if (newN === 0) {
      console.log('#'.repeat(n));
    } else {
      console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
  }
}

staircase(6);
