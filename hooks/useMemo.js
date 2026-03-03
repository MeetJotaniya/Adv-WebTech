import React, { useMemo } from "react";

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function sumPrimes(n) {
  let sum = 0, count = 0, num = 2;
  while (count < n) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }
  return sum;
}

export default function PrimeSumOptimized() {
  const result = useMemo(() => sumPrimes(5000), []);

  return <h2>Optimized sum of first 5000 primes: {result}</h2>;
}