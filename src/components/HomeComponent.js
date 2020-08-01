import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Input } from 'reactstrap';
import { Collapse } from 'react-collapse';
import { Loading } from './LoadingComponent';
import List from 'react-smooth-draggable-list';
import Styled from "styled-components"

function RenderCard({ item, isLoading, errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card >
                <CardImg src={require(`.${item.image}`)} alt={`.asdfsf${item.image}`} />
                <CardBody>
                    <CardTitle className="font-weight-bold">{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}


function Home(props) {
    // current state and a function that updates it
    const [count, setCount] = useState(false);
    const [order, setOrder] = useState([0, 1, 2])
    const draggableList = Styled.div`
            background-color: #fff;
            border: 1px solid #999;
            padding: 4px 7px;
            `
    const DragHandle = props => (
        <div
            {...props}
            style={{
                position: "absolute",
                top: "2px",
                right: "5px",
                cursor: "pointer",
                letterSpacing: "3px"
            }}
        >
            ::
        </div>
    )

    return (
        <div>
            <Collapse isOpened={!count}>
                <br></br><br></br><br></br><br></br>
                <label>
                    Touch the below checkbox!<br></br>
                    Open:
                    <Input className='input' type='checkbox' checked={count}
                        onChange={() => setCount(!count)}>
                    </Input>
                </label>
                <br></br><br></br><br></br><br></br>
            </Collapse>
            <Collapse isOpened={count} hasNestedCollapse>
                <div className="d-flex justify-content-center align-items-center">
                    Which city is the best? (Drag your option to the top!)<br></br>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <List rowHeight={40} rowWidth={400}>
                        <List.Item dragHandle={<DragHandle />} as={draggableList}>
                            Arequipa
                        </List.Item>
                        <List.Item dragHandle={<DragHandle />} as={draggableList}>
                            Lima
                        </List.Item>
                        <List.Item dragHandle={<DragHandle />} as={draggableList}>
                            Cuzco
                        </List.Item>
                    </List>
                </div>
                <div className='container'>
                    <div className='row align-items-start'>
                        <div className="col-12 col-md m-1">
                            <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                        </div>
                        <div className="col-12 col-md m-1">
                            <RenderCard item={props.promotion} />
                        </div>
                        <div className="col-12 col-md m-1">
                            <RenderCard item={props.leader} />
                        </div>
                    </div>
                </div>
            </Collapse >



        </div>
    )
}


export default Home;