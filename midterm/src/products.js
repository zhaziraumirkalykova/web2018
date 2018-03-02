import React, { Component } from 'react';
import './App.css';

class Products extends Component {
	constructor(){
		super();
		this.state = {
			items: [
			{
				id: 0,
				name: 'Milk',
				price: 200,
			},
			{
				id: 1,
				name: 'Bread',
				price: 200,
			},
			{
				id:2,
				name: 'Ice-cream',
				price: 200,
			},
			{
				id: 3,
				name: 'Candy',
				price: 200,
			},
			],
			total: 0,
		}
	}
	handleClick(){
		let total = this.state.total;
		let items = this.state.items;
		let price; 
		items.map((item, index) => {
			if(item.id == index){
				price = item.price
			}
		})
		this.setState({
			total: this.state.total + price
		})
		console.log(price);
	}
	render(){
		return(
			<div className = "App">
				<div className = "Products">
					<h2> Products </h2>
					{this.state.items.map((item, index) => {
						return(
							<div>
								<button className = "items" onClick= {this.handleClick.bind(this,index)} > {item.name} {item.price} </button>
							</div>
							);
					})
					}
					<h3> Total {this.state.total} </h3>
				</div>
			</div>
			);
	}
}
export default Products;