import { useState } from 'react';

export default initial => {
  const [input, setInput] = useState(initial);

  const handleChange = e => {
    setInput(e.target.value);
  };

  return [input, handleChange];
};
