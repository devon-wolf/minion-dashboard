import React, { Component } from 'react'
import { getAllResponses, deleteResponse } from '../utils/server-utils.js'
import style from './ListPage.module.css'
import ResponseTable from './ResponseTable.js'

export default class ListPage extends Component {
	state = {
		entries: [],
		loading: false,
	}

	componentDidMount = async () => {
		await this.loadEntries();
	}

	loadEntries = async () => {
		this.setState({ entries: [], loading: true });
		const responses = await getAllResponses();
		this.setState({ entries: responses, loading: false });
	}

	removeEntry = async id => {
		await deleteResponse(id, this.props.token);
		await this.loadEntries();
	}
	
	render() {
		return (
			<main>
				<button
				 className={style.addButton}
				 onClick={e => this.props.history.push('/new')}
				 >Add New Entry</button>

				<ResponseTable 
				data={this.state.entries}
				handleDeleteClick={this.removeEntry}
				handleEditClick={e => this.props.history.push('/update')}
				/>
			</main>
		)
	}
}
