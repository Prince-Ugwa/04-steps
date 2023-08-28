import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "fred" });
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    // this method of updating state is fine but but it is more efficient to
    //to update state using call back function for safe and future update.
    // if (step > 1) setStep(step - 1);

    //updating state wit a callback function
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = function () {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
    // setTest({ name: "Prince" });
  };
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {step}:{messages[step - 1]}
            {/*test.name*/}
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
      )}
    </div>
  );
}
