const InputField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  min,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-lg tracking-wide">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        required={required}
        className="ml-5 bg-white rounded-md pl-3 outline-0 text-blue-800 font-medium"
      />
      <br />
    </div>
  );
};

export default InputField;
