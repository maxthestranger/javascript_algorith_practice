function diagonalDifference(arr) {
  // Write your code here
  let primary = 0;
  let secondary = 0;
  let arrLength = arr.length;
  for (let i = 0; i < arr.length; i++) {
    primary += arr[i][i];
    secondary += arr[i][(arrLength -= 1)];
  }

  return Math.abs(primary - secondary);
}

console.log(
  diagonalDifference([
    [2, 5, 4],
    [7, 9, 2],
    [-4, 5, 8],
  ])
);
