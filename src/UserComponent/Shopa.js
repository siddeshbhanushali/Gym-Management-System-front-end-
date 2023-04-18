import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { products } from '../component/products';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Shopa() {
  return (
  
    <Row xs={1} md={2} className="g-4">
      {products.map(data=>(
        <Col>
          <Card width="100rem" height="100rem">
            <Card.Img variant="top" src={data.img}  />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <button>Buy now</button>

              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Shopa;