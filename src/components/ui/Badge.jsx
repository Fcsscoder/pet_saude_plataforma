export default function Badge({
  children,
  className = '',
  variant = 'default',
}) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        variants[variant] || variants.default
      } ${className}`}>
      {children}
    </span>
  );
}
