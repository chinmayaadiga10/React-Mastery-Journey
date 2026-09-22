import { useState } from "react";
import InputField from "./InputField";
import BMIResult from "./BMIResult";

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
  });

  const [BMI, setBMI] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const calculateBMI = (height, weight) => {
    const newHeight = height / 100;
    const bmiValue = weight / newHeight ** 2;

    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You have Normal Weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  };

  const handleForm = (event) => {
    event.preventDefault();

    calculateBMI(formData.height, formData.weight);

    setFormData({
      height: "",
      weight: "",
    });
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl pt-8  bg-linear-to-r from-sky-400 to-indigo-900 bg-clip-text text-transparent">
        BMI Calculator
      </h1>
      <h4 className="text-center font-semibold text-2xl pt-3  bg-linear-to-r from-sky-400 to-indigo-900 bg-clip-text text-transparent">
        Track Your Body Mass Index Instantly
      </h4>

      <form
        onSubmit={handleForm}
        className="bg-blue-400/30 backdrop-blur-lg  flex w-4/10 justify-center items-center m-auto mt-10 flex-col rounded-lg h-60 shadow-xl shadow-blue-300"
      >
        <InputField
          label="Enter Your Height in Cm"
          id="height"
          name="height"
          type="number"
          value={formData.height}
          onChange={handleInput}
          min={1}
          required={true}
        />

        <InputField
          label="Enter Your Weight in Kg"
          id="weight"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleInput}
          min={1}
          required={true}
        />

        <button
          type="submit"
          className="bg-blue-900  rounded-lg px-3 py-2 text-white mt-12"
        >
          Calculate BMI
        </button>
      </form>

      <BMIResult BMI={BMI} message={message} />
    </div>
  );
};

export default BMICalculator;
