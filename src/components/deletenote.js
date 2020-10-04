import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';

import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = ({ noteId, history }) => {
	const [deleteNote] = useMutation(DELETE_NOTE, {
		variables: {
			id: noteId
		},
		refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
		onCompleted: () => {
			history.push('/mynotes');
		}
	});
	return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
};
export default withRouter(DeleteNote);
