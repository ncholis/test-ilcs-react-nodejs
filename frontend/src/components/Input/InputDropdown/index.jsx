import { useState } from 'react';
import PropTypes from 'prop-types'

const InputDropDown = ({ label, options, value }) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%'}}>
      {/* Dropdown Button */}
      <label
        htmlFor="inputField"
        className="input-label"
      >
        {label}
      </label>
      <button
        onClick={toggleDropdown}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          textAlign: 'left',
          border: '1px solid #ccc',
          borderRadius: '9px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          cursor: 'pointer',
        }}
      >
        {selected || value}
        {/* Outlined Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '16px', height: '16px', marginLeft: 'auto' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            margin: 0,
            padding: '5px 0',
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          {options && options.map((option, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
              onClick={() => handleSelect(option)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

InputDropDown.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    disabled: PropTypes.bool
}

export default InputDropDown