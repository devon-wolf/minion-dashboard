import React, { Component } from 'react'
import SingleEntryForm from './SingleEntryForm.js'

export default class NewEntryPage extends Component {

	returnToList = () => this.props.history.push('/');

	render() {
		return (
			<main>
				<SingleEntryForm
				token={this.props.token}
				returnToList={this.returnToList}
				/>
			</main>
		)
	}
}
