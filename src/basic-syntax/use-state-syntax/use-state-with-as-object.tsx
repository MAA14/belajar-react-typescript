/**
 * Kita bisa mengirim object kosong untuk initialize State tanpa harus menggunakan null
 */

import { useState } from "react";

type TCounterSetupProps = {
  currentNumber: number;
  status: "Increment" | "Decrement";
  ratio: number;
};

export function IncDecWithState() {
  const [counterSetup, setCounterSetup] = useState({
    currentNumber: 0,
  } as TCounterSetupProps);

  function handleIncrement(counterSetup: TCounterSetupProps, ratio: number) {
    const updateCounterSetup: TCounterSetupProps = {
      currentNumber: counterSetup.currentNumber + ratio,
      status: "Increment",
      ratio: ratio,
    };

    setCounterSetup(updateCounterSetup);
  }

  function handleDecrement(counterSetup: TCounterSetupProps, ratio: number) {
    const updateCounterSetup: TCounterSetupProps = {
      currentNumber: counterSetup.currentNumber - ratio,
      status: "Decrement",
      ratio: ratio,
    };

    setCounterSetup(updateCounterSetup);
  }

  return (
    <div className="container">
      <div className="container button-container">
        <button onClick={() => handleIncrement(counterSetup, 10)}>
          Increment by ratio 10
        </button>
        <button onClick={() => handleDecrement(counterSetup, 10)}>
          Decrement by ratio 10
        </button>
      </div>
      <p>
        Current Number is <b>{counterSetup.currentNumber}</b>
      </p>
    </div>
  );
}
