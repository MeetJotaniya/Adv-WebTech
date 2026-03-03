import React from "react";

function PrimeSum() {
  function isPrime(num) {

    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        return false;
    }

    return true;
  }


  function calculateSum() {
    console.log("Calculating...");
    let count = 0;
    let num = 2;
    let sum = 0;

    while (count < 5000) {

      if (isPrime(num)) {
        sum += num;
        count++;
      }
      num++;
    }

    return sum;
  }


  const result = calculateSum();

  return (
    <div>
      <h2>Sum of first 5000 prime numbers:</h2>
      <h3>{result}</h3>
    </div>
  );
}

export default PrimeSum;