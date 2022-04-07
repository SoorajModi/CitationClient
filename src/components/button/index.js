import React from 'react';

const classBySize = {
  small: 'h-8 rounded-full px-10 py-1 leading-6 text-sm',
  medium: 'h-10 rounded-full px-14 py-2 leading-tight text-sm',
  large: 'h-12 rounded-full px-18 py-3 leading-6 text-base',
};

const primaryClassByType = {
  primary: 'inline-block text-white font-medium '
    + 'focus:outline-none focus:ring-0 '
    + 'bg-teal-600 hover:bg-teal-700 active:bg-teal-700 focus:bg-teal-700 '
    + 'shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg',
  ghost: 'inline-block text-teal-600 hover:text-white font-medium '
    + 'focus:outline-none focus:ring-0 '
    + 'border border-teal-600 '
    + 'bg-white hover:bg-teal-600 active:bg-teal-600 focus:bg-teal-600 '
    + 'shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg',
};

const transition = 'transition duration-150 ease-in-out';

function Button({
  text,
  onClick = null,
  disabled = false,
  size = 'medium',
  primaryClass = 'primary',
  className,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${classBySize[size]} ${primaryClassByType[primaryClass]} ${transition}`}
    >
      {text}
    </button>
  );
}

export default Button;
