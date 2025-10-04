const Input = ({ type = 'text', className = '', ...props }) => {
  return (
    <input
      type={type}
      className={`rounded-md px-3 border py-2 transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;
