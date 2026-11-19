                import "./Foodmarket.css"
                import Button from 'react-bootstrap/Button';

                import Container from 'react-bootstrap/Container';
                import Container from 'react-bootstrap/Container';
                import Row from 'react-bootstrap/Row';
                import Col from 'react-bootstrap/Col';
                import Card from 'react-bootstrap';
                
                
                import foodsData from "../../public/img/foodsData";
                function foodData(){
                        
                }
                
                
                
                
                function Foodfmaket() {
    return (
        <Container>
            {/* 버튼 목록 */}
            <div>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>

            {/* 카드 목록 */}
            <Row xs={1} md={2} xxl={3} className="mt-3">
                <Col>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://placehold.co/600x300"
                        />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    
    )
    <Container>
    <row>
        {
            Foods.map((food, index)=>{
                
            }
        }
    </row>




    </Container>














);
}

export default Foodfmaket;




            

















    

        
        
        