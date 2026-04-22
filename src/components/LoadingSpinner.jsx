import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'blue' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    white: 'border-white',
    purple: 'border-purple-500'
  };

  return (
    <div className={`spinner ${sizeClasses[size]} border-4 border-gray-300 ${colorClasses[color]} rounded-full animate-spin`}>
    </div>
  );
};

export default LoadingSpinner;