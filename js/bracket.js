import React from 'react';

export default class Bracket extends React.Component{
	constructor(){
		super();
		this.state = {
			left: 0,
			right: 0
		};
	}
	handleChange(e){
		let value = e.target.value;
		let last = value[value.length-1];
		if(last === '('){
			this.setState({left: this.state.left + 1});
		}else if(last === ')'){
		 	this.setState({right: this.state.right + 1});
		 }
	}	
	render(){
		let left = this.state.left;
		let right = this.state.right;	
		return <div>
			<input type="text" onChange={e => this.handleChange(e)} />
			{left == right ? 'хорошо' : 'плохо'}
		</div>
	}
}