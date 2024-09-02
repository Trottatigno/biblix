function TextInput({ id, placeholder, type, className, value, onChange }) {
  return (
    <div className="p-2">
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default TextInput;
