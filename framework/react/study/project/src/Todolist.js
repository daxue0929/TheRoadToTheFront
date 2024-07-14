import React, { Component, useRef } from "react";
import store from './store'

export default class Todolist extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()
	}

	handleInputChange = (e) => {
		const { value } = e.target;
		const action = {
			type: 'change_input',
			value: e.target.value
		}
		this.setState({ inputValue: value });
		console.log(action)
	}

	submitItem = () => {
		const { inputValue, list } = this.state;
		// 将输入框的值添加到 list 中
		this.setState({
			inputValue: '',
			list: [...list, inputValue] // 使用 setState 更新 list 状态
		});
	}


	render() {
		const { inputValue, list } = this.state;
		return (
			<div>
				<input value={inputValue} type="text"
							 onChange={this.handleInputChange}
				/>
				<button onClick={this.submitItem}>提交</button>
				<ul>
					{list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		)
	}


}
