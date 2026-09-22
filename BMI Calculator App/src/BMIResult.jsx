const BMIResult = ({ BMI, message }) => {
  return (
    <div>
      {BMI ? (
        BMI < 18.5 ? (
          <h2 className="font-medium text-2xl text-center mt-8">
            Your BMI Is : <span className="text-yellow-600">{BMI}</span>{" "}
          </h2>
        ) : BMI < 25 ? (
          <h2 className="font-medium text-2xl text-center mt-8">
            Your BMI Is : <span className="text-green-600">{BMI}</span>{" "}
          </h2>
        ) : (
          <h2 className="font-medium text-2xl text-center mt-8">
            Your BMI Is : <span className="text-red-600">{BMI}</span>{" "}
          </h2>
        )
      ) : null}
      {message ? (
        <h3 className="font-medium text-2xl text-center mt-2 ">{message}</h3>
      ) : null}
    </div>
  );
};

export default BMIResult;
