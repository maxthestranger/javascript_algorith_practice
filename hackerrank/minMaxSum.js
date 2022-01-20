function miniMaxSum(arr) {
  // Write your code here
  let sortedArray = arr.sort((a, b) => {
    return a - b;
  });

  let maximum = sortedArray.slice(1).reduce((acc, curEl) => {
    return acc + curEl;
  });

  let minimum = sortedArray.slice(0, -1).reduce((acc, curEl) => {
    return acc + curEl;
  });

  console.log(minimum, maximum);
}
