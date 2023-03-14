import React, { useState } from 'react';

export const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <button onClick={() => setShowRules(!showRules)}>Показать правила</button>
      {showRules && <p>Тут были правила, но мы их ...</p>}
    </>
  );
};
