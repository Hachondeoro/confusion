import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Pull in the function for the action.
// A comment
import App from './Animated';
import { actions } from 'react-redux-form';
import { addComment, fetchDishes } from '../redux/ActionCreators';



// How to transform the current Redux store state into the props you want to pass to a 
// presentational component you are wrapping
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

// You can create a bound action creator that automatically dispatches:
// And then you'll be able to call them directly: boundAddTodo(text)
// This connects the action, to dispatch the action.
const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});



class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                />
            );
        };



        const Person = ({ person }) => {
            return (
                <About leaders={this.props.leaders}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={Person} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

// This is the container
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// OK: The store is available universally (through configureStore). the dishes file is being pulled from src/redux/dishes.js
// There is an error because this Dishes object being imported from dishes.js is in the form of a reduucer
// dishes = reducer function, doesn't have the filter properties.    leaders is a regular object, it can have
// the filter properties, therefore, the functions in MainComponent.js work properly.

// Fix the MENU/Comments section using the logic stated above