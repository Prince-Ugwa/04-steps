import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = function () {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = function () {
    if (step < 3) setStep(step + 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        {step}:{messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          className="previous"
          style={{ backgroundColor: "#7950f2", color: "#f5f5f5" }}
          onClick={handlePrevious}
        >
          previous
        </button>
        <button
          className="next"
          style={{ backgroundColor: "#7950f2", color: "#f5f5f5" }}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
