import React, { useState } from 'react';

const Hello = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <h2>Hello, world!</h2>
      <button onClick={() => setClicks(clicks + 1)}>Click this!</button>
      Number of clicks: {clicks}
    </div>
  );
};

export default Hello;
