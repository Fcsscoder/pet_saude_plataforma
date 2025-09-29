const Button = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  let baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer px-6 py-1.5';

  let variants = {
    ghost:
      'bg-transparent text-orange-600 hover:bg-orange-50 focus:ring-orange-500 focus:ring-offset-white px-2 py-1',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
