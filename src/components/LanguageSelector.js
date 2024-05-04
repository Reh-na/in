import React from 'react';

const LanguageSelector = ({ onSelectLanguage }) => {
  const handleLanguageChange = (e) => {
    onSelectLanguage(e.target.value);
  };

  return (
    <div>
      <select className='w-full bg-red-800 text-white p-2' onChange={handleLanguageChange}>
        <option value="en" >EN</option>
        <option value="ar">AR</option>
        
      </select>
    </div>
  );
};

export default LanguageSelector;


