function primeNumbers(number) {
  const n = number;
  let listNums = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        listNums.push(i);
      }
    }
  }
  return listNums;
}

module.exports = { primeNumbers };
