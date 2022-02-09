import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'

const pic_1 = "https://images.unsplash.com/photo-1638913660695-b490171d17c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";

const Home = () => {
    return (
        <div className='home-body mt-5'>
            <Container>
                <Row className='home-main-row'>
                    <Col>
                        <Card className='p-5'>
                            <Card.Body>
                                <Image src={pic_1} height={300} />
                            </Card.Body>
                            <Card.Subtitle className='mb-2 text-muted'>
                                <h2>Full-Stack Developer</h2>
                            </Card.Subtitle>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;