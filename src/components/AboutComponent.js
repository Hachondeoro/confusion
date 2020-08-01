import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    function RenderLeader({ item }) {
        return (
            <Media className='p-3'>

                <Media className="w-25">
                    <img className="pr-4 pt-1 w-100" src={require(`.${item.image}`)} alt={item.name} />
                </Media>
                <Media body>
                    <Media heading>
                        <h2>{item.name}</h2>
                    </Media>
                    {item.designation}
                    <br></br>
                    <br></br>
                    {item.description}
                </Media>
            </Media >
        )
    }


    const leaders = props.leaders.map((leader) => {
        return (
            <div className='container'>
                <RenderLeader item={leader} />
            </div>

        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Peru</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h1>Peru Cuisine Highlights</h1>
                    <h2>Why Peruvian Cuisine?</h2>
                    <p>The sheer variety of tastes all over Peru make this one of the most regionally diverse cuisines in all of Latin America. Combining ancient Inca traditions with influences from centuries of foreign immigration (most notably Spanish and Japanese) has created a wide range of iconic dishes: from the Asian-inspired chifa stir-fry and ceviche to the ubiquitous Spanish-inspired empanada and Inca-inspired grilled guinea pig. Peruvian cuisine is like a maze of international tastes which melded hundreds of years ago and have evolved into something utterly unique.</p>
                    <p>Peru’s exceptional cuisine has been shining on centre stage for some time, especially as fusion cooking involving indigenous ingredients and cooking methods gain popularity, all over the world. The intricate and fascinating history of Peruvian cuisine is becoming well known and there aren’t many travellers who land in Lima and not know that the capital is home to outstanding Michelin-starred restaurants or that they can enjoy superlative dishes all over the country, even as they’re cruising the remotest reaches of the Peruvian Amazon. Peru is, in one short word, absolutelybloodydelicious.</p>

                    <h2>Awards</h2>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2019'>South America's Leading Culinary Destination 2019: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2018'>South America's Leading Culinary Destination 2018: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2017'>South America's Leading Culinary Destination 2017: Argentina<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2016'>South America's Leading Culinary Destination 2016: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2015'>South America's Leading Culinary Destination 2015: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2014'>South America's Leading Culinary Destination 2014: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2013'>South America's Leading Culinary Destination 2013: Peru<br></br></a>
                    <a href='https://www.worldtravelawards.com/award-south-americas-leading-culinary-destination-2012'>South America's Leading Culinary Destination 2012: Peru<br></br></a>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">28 July 1821</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Peruvian People</dd>
                                <dt className="col-6">Peru's population</dt>
                                <dd className="col-6">33 million people</dd>
                                <dt className="col-6">Main cities</dt>
                                <dd className="col-6">Arequipa, Lima, Cusco</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Potatoes are tubers native to Peru. Out of the 5,000 varieties that exist in the world, you will find 2,694 in Peru. These potatoes come in all shapes, colors and textures. Peruvians eat potatoes with almost every other dish and their devotion to the vegetable is so strong they even have their own national day: May 30.</p>
                                <footer className="blockquote-footer">Frank Espinoza,
                                <cite title="Source Title">The Internet, Circa, 2020</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;