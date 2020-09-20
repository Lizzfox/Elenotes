import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Note from '../components/note';

const GET_NOTE = gql`
	query note($id: ID!) {
		note(id: $id) {
			id
			createdAt
			content
			favoriteCount
			author {
				username
				id
				avatar
			}
		}
	}
`;

const NotePage = props => {
	const id = props.match.params.id;

	const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

	if (loading) return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error! Note not found</p>;
	// if the data is successful, display the data in our UI
	return <Note note={data.note} />;
};

export default NotePage;
