import React from 'react';

function Input({
  value = '',
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
  label = null,
  textArea = false,
  width = 'w-full',
  height = 'h-10',
  minHeight = '',
  resize = false,
  disabled = false,
  className,
}) {
  return (
    <div className={`${className} flex flex-col space-y-1`}>
      <span className="flex items-center">{label}</span>
      <div className={`flex items-center rounded-lg py-1.5 ${width}
        border-solid border border-gray-300 focus:border-blue-500 focus:text-gray-600 
        ${disabled ? 'border-gray-100 text-gray-400 bg-gray-100' : 'hover:border-gray-600'}`}
      >
        <div className={`flex items-start rounded-lg w-full ${textArea && height}`}>
          {textArea
            ? (
              <textarea
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                onBlur={(e) => onBlur(e)}
                disabled={disabled}
                className={`${minHeight} ${resize && 'resize-none'} rounded-lg px-3 h-full w-full border-0 box-border focus:outline-none text-sm`}
              />
            )
            : (
              <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                onBlur={(e) => onBlur(e)}
                disabled={disabled}
                className="px-3 py-1 border-0 rounded-lg w-full h-full text-sm box-border focus:outline-none"
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default Input;
