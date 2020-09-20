import React, { useEffect } from 'react';

const Notes = () => {
  useEffect(() => {
    document.title = 'Fucking notes';
  });

  return (
    <div>
      <h1>Notes</h1>
      <p>These are notes</p>
    </div>
  );
};

export default Notes;
