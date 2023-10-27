import { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="appearance-none h-6 w-6 border border-[#4A079C] rounded mr-3 checked:bg-[#38383E] checked:border-[#FFFFFF]"
        aria-label={label}
      />
      <span className="font-semibold text-[#38383E]">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
