import React, { useEffect } from 'react';

const Notes = () => {
  useEffect(() => {
    document.title = 'Elenotes';
  });

  return (
    <div>
      <h1>Notes</h1>
      <p>These are notes</p>
    </div>
  );
};

export default Notes;
