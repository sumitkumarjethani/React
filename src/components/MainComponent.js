import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

//CONTAINER:
class Main extends Component {

	constructor(props) {
    super(props);
		/*
			state = properties of the Component
			Here we lift up the state to the App component
			and pass it to MenuComponent.
		*/
    this.state = {
    	dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
			</div>
		);
	}
}

export default Main;
