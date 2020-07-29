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
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import App from './Animated';


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
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) }
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {
            return (
                <div>
                    <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                        dishesLoading={this.props.dishes.isLoading}
                        dishesErrMess={this.props.dishes.errMess}
                        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                        promosLoading={this.props.promotions.isLoading}
                        promosErrMess={this.props.promotions.errMess}
                        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                    />
                    <App />
                </div>
            )

        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    ErrMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            )
        }

        const Person = ({ person }) => {
            return (
                <About leaders={this.props.leaders}
                />
            )
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route exact path='/aboutus' component={Person} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

// This is the container
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

