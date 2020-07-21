import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><p className='font-weight-bold text-uppercase'>
                            {dish.category}</p> {dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}


function RenderComments({ dish }) {
    if (dish != null) {
        const comments = dish.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
                </li>
            );
        })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h2>Comments</h2>
                <ul className='list-unstyled'>
                    {comments}
                </ul>
            </div>
        )
    } else return (<div></div>)

}

const DishDetail = (props) => {
    console.log('DishDetail Component render invoked');
    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>

            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments dish={props.comments} />
            </div>
        </div>
    );
}


export default DishDetail; 