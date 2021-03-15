import React, { Component } from 'react'
import { addNewResponse } from '../utils/server-utils';

export default class BulkEntryForm extends Component {
	state = {
		responses: [],
		regexInput: '',
		imageInput: '',
		images: []
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { responses } = this.state;

		await Promise.all(responses.forEach(
			async response => 
			await addNewResponse(response, this.props.token)
		));

		this.props.history.push('/list');
	}

	render() {
		return (
			<form>
				<input />
			</form>
		)
	}
}
