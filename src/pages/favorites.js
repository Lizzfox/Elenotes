import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites';
  });

  return (
		<div>
			<h1>Favorite Notes</h1>
			<p>These are favorites</p>
		</div>
	);
};

export default Favorites;
