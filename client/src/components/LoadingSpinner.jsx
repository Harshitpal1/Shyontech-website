export default function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeStyles = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
    xl: 'w-16 h-16 border-4',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeStyles[size]} border-primary/30 border-t-primary rounded-full animate-spin`}
      />
    </div>
  );
}
