import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/userform';

const SIGNUP_USER = gql`
	mutation signUp($email: String!, $username: String!, $password: String!) {
		signUp(email: $email, username: $username, password: $password)
	}
`;

const SignUp = props => {
	// Apollo Client
	const client = useApolloClient();
	//add the mutation hook
	const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
		onCompleted: data => {
			localStorage.setItem('token', data.signUp);
			// update the local cache
			client.writeData({ data: { isLoggedIn: true } });
			props.history.push('/');
		}
	});

	useEffect(() => {
		document.title = 'Sign up - Elenotes';
	});

	return (
		<React.Fragment>
			<UserForm action={signUp} formType="signup" />
			{loading && <p>Loading...</p>}
			{error && <p>Error creating an account!</p>}
		</React.Fragment>
	);
};

export default SignUp;
