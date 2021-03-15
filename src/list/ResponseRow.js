import React, { Component } from 'react'
import style from './ListPage.module.css'

export default class ResponseRow extends Component {
	render() {
		return (
			<tr>
				<td className={style.idCell}>
					{this.props.id}
				</td>

				<td className={style.triggerCell}>
					{this.props.trigger}
				</td>

				<td className={style.imageCell}>
					{this.props.images.map((image) =>
					<img src={image} alt="response" key={image} />)}
				</td>
				
				<td>
					<button
					onClick={this.props.handleEditClick}>
						Edit
					</button>

					<button
					onClick={this.props.handleDeleteClick}>
						Remove
					</button>
				</td>
			</tr>
		)
	}
}