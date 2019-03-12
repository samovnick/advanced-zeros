module.exports = function getZerosCount(number, base) {
  // your implementation+
  // your solution

  let primeNumbers = new Set();
  let K = base;
  let i = 2;
  while (K > 1) {
    if (K % i == 0) {
      primeNumbers.add(i);
      K = Math.floor(K / i);
    } else {
      i++;
    }
  }

  //create array a, b

  let a = [];
  let b = [];

  for (let tmp of primeNumbers) {
    K = base;
    i = 0;
    while (!(K % tmp)) {
      K = Math.floor(K / tmp);
      i++;
    }
    a.push(i);

    K = number;
    i = 0;
    while (K >= 1) {
      K /= tmp;
      i += Math.floor(K);
    }
    b.push(i);
  }

  //min
  let min = Math.floor(b[0] / a[0]);
  for (let i = 1; i < a.length; i++) {
    console.log(min);
    min = Math.min(min, Math.floor(b[i] / a[i]));
  }

  return min;
};
