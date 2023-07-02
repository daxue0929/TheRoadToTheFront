import React, { Component } from "react";
import store from './store'

export default class Todolist extends Component {

	constructor(props) {
		super(props)

		this.state = store.getState()

		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e) {
		const action = {
			type: 'change_input',
			value: e.target.value
		}
		console.log(action)
	}


	render() {
		return (
			<div>
				<input value={this.state.inputValue} type="text"
							 onChange={this.handleInputChange}
				/>
				<button>提交</button>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</div>
		)
	}


}
