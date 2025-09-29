const Input = ({ type = 'text', className = '', ...props }) => {
  return (
    <input
      type={type}
      className={`border rounded-md px-3 py-2 focus:outline-none transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;
