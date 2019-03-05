import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/**
 * 模拟数据的结构列表
 * @type {*[]}
 */
const list = [
	{
		title: 'React',
		url: 'http://facebook.github.io/react/',
		author: 'daxue',
		num_components: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'http://facebook.github.io/reactjs/redux/',
		author: 'Dan Abramov, Andrew Clark',
		num_components: 2,
		points: 5,
		objectID: 1,
	}
];

class App extends Component {


	constructor(props) {
		//在类初始化的时候调用，在这个方法中可以设置初始化状态以及类绑定方法
		super(props);
		this.state = {
			list: list,
			searchValue: '1'
		};
		this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this)
	}

	componentWillMount() {
		//在render()之前调用，这就是他为什么可以去设置组件的内部状态，因为他不会触发组件的再次渲染，
		// 但一般还是推荐在contructor()中设置初始化状态
	}
	componentDidMount() {
		// 它仅在组件挂载后执行一次，这是发起异步请求去API获取数据的绝佳时期，获取到的数据
		//将被保存在内部组件得到状态中，然后再render()生命周期方法中展示出来
	}
	componentWillUnmount() {
		// 他会在组建销毁之前被调用，你可以利用这个生命周期方法去执行任何清理任务
	}

	// 在组件挂载中有四个生命周期方法，调用顺序如下：
	// constructor() => componentWillMount() => render() => componentDidMount()

	componentWillReceiveProps(nextProps, nextContext) {
	//	在一个更新生命周期中被调用，新的属性会作为他的输入，因此你可以用this.props来对比之后的属性和之前的属性，基于对比的
	//	结果去实现不同的行为，此外你也可以基于新的属性来设置组件的状态
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
	//	每次组件因为状态或属性更改时，调用。你将在成熟的React应用中使用它他进行性能优化，在一个更新的生命周期中，组件会根据该方法
	// 	返回的布尔值来决定是否重新渲染。这样你就可以阻止组件的渲染生命周期，避免不必要的渲染。
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
	//	这是render()执行之前的最后一个方法，你已经拥有下一个属性和状态，他们可以在这个方法中任你处置，你可以
	//	利用这个方法在渲染之前做最后的的准备，
	// 	在这个生命周期中，你不能在触发setState()。
	//	如果你想基于新的属性计算状态，你必须利用componentWillReceiveProps()
}

	componentDidUpdate(prevProps, prevState, snapshot) {
	//	这个在render()之后立即调用，你可以把它当作操作DOM或者执行更多异步请求的机会
	}

	/*
	当组件的状态或属性改变的时候，用来更新组件的生命周期是的一共有5个生命周期方法
	他们的调用的顺序如下：
	componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() =>componentDidUpdate()
	*/

	componentDidCatch(error, errorInfo) {
	//	React 16引入，用来捕获组件的错误，向用户展示一条信息，说明应用发生了错误
	}

	render() {
		//这个生命周期方法是必须有的，他返回作为组件输出的元素，这个方法应该是一个纯函数，因此不应该在这个方法中修改组件的状态。
		//他把属性和状态作为输入，并且返回（需要渲染的）元素
		return <div className="list-div">
			<form>
				<input type="text" value={this.state.searchValue} onChange={this.onSearchChange}/>
			</form>
			<Table
				list={this.state.list}
				pattern={this.state.searchValue}
				onDismiss={this.onDismiss}
			/>
			{/*{this.state.list.map(function (item) {*/}
			{/*const onHandleDismiss = () => {*/}
			{/*this.onDismiss(item.objectID);*/}
			{/*};*/}
			{/*// console.log(item.objectID + Math.random());*/}
			{/*return <div key={item.objectID + Math.random()}>*/}
			{/*<span><a href={item.url}>{item.title}</a></span>*/}
			{/*<span>{item.author}</span>*/}
			{/*<span>{item.num_components}</span>*/}
			{/*<span>{item.points}</span>*/}
			{/*<button onClick={onHandleDismiss}>删除</button>*/}
			{/*</div>*/}
			{/*})}*/}
		</div>
	}


	onDismiss(objectID) {
		const updatedList = this.state.list.filter(item => item.objectID !== objectID);
		this.setState({list: updatedList})
	}

	onSearchChange(event) {
		this.setState({searchValue: event.target.value});
		console.log(this.state.searchValue);
	}
}

export default App;

class Table extends Component {
	render() {
		const {list, _, onDismiss} = this.props;
		return (
			<div>
				{list.map(item =>
					<div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
						<span>{item.author}</span>
						<span>{item.num_components}</span>
						<span>{item.points}</span>
						<span>
              <button
								onClick={() => onDismiss(item.objectID)}
								type="button"
							>
                Dismiss
              </button>
            </span>
					</div>
				)}
			</div>
		);
	}
}

// const logoDiv = <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo"/>
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//       {console.log("123")}
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>;
