import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Home from './home';
import Notes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';

import Layout from '../components/layout';

const IS_LOGGED_IN = gql`
	{
		isLoggedIn @client
	}
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<Route
			{...rest}
			render={props =>
				data.isLoggedIn === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

const Pages = () => {
	return (
		<Router>
			<Layout>
				<Route exact path="/" component={Home} />
				<PrivateRoute path="/notes" component={Notes} />
				<PrivateRoute path="/favorites" component={Favorites} />
				<PrivateRoute path="/new" component={NewNote} />
				<PrivateRoute path="/edit/:id" component={EditNote} />
				<Route path="/note/:id" component={NotePage} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
			</Layout>
		</Router>
	);
};

export default Pages;
