import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (<div></div>);
    }
  }

  //All Component class have to implement this method (view of the Component)
  render() {
    //It is a list
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay className="ml-5">
              <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

//Export first and then you can import
export default Menu;
