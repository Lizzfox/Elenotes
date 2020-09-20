import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import GlobalStyle from './components/globalStyle';
import Pages from './pages';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
	uri,
	cache,
	connectToDevTools: true
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Pages />
		</ApolloProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root')); 
