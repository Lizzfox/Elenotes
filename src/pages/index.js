import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import Notes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';

import Layout from '../components/layout';

const Pages = () => {
	return (
		<Router>
			<Layout>
				<Route exact path="/" component={Home} />
				<Route path="/notes" component={Notes} />
				<Route path="/favorites" component={Favorites} />
				<Route path="/note/:id" component={NotePage} />
			</Layout>
		</Router>
	);
};

export default Pages;
