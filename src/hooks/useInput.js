import { useState } from 'react';

export default initial => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleReset = () => {
    setInput('');
  };

  return [input, handleChange, handleReset];
};
