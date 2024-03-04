import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';


function App() {

  const mydata = [
    { "name": "RAMESH PATEL", "Maths": 50, "Physics": 75, "Chemistry": 85, "image": "images/boy.png" },
    { "name": "MAMESH PATEL", "Maths": 10, "Physics": 75, "Chemistry": 85, "image": "images/boy.png" },
    { "name": "SURESH PATEL", "Maths": 80, "Physics": 95, "Chemistry": 85, "image": "images/boy.png" },
    { "name": "GITA PATEL", "Maths": 12, "Physics": 35, "Chemistry": 45, "image": "images/girl.png" },
    { "name": "SITA PATEL", "Maths": 98, "Physics": 75, "Chemistry": 45, "image": "images/girl.png" },
    { "name": "RITA PATEL", "Maths": 77, "Physics": 65, "Chemistry": 95, "image": "images/girl.png" },
  ];

  for (var i = 0; i < mydata.length; i++) {
    if (mydata[i]["Maths"] <= 33 || mydata[i]["Physics"] <= 33 || mydata[i]["Chemistry"] <= 33) {
      document.getElementById("result").innerHTML = `<span className='success'>Exam Not Cleared</span>`;
    }
    else {
      document.getElementById("result").innerHTML = `<span className='warning'>Exam Cleared</span>`;
    }
  }

  return (
    <div className="container d-flex mx-auto">
      <Row className=''>
        {mydata.map(
          (marks, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index} >
                <Card style={{ width: '22rem', margin: '10px 10px' }}>
                  <Card.Img variant="top" src={marks.image} height='280px' />
                  <Card.Body>
                    <Card.Title>{marks.name}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Maths &emsp;&emsp;&emsp;&emsp; {marks.Maths}</ListGroup.Item>
                      <ListGroup.Item>Physics &emsp;&emsp;&ensp;&emsp; {marks.Physics}</ListGroup.Item>
                      <ListGroup.Item>Chemistry &emsp;&emsp;&nbsp; {marks.Chemistry}</ListGroup.Item>
                      <ListGroup.Item>Total &emsp;&emsp;&emsp;&emsp;&ensp; {marks.Maths + marks.Chemistry + marks.Physics}</ListGroup.Item>
                      <ListGroup.Item>Percentage&emsp;&emsp; {(marks.Maths + marks.Chemistry + marks.Physics) / 3}%</ListGroup.Item>
                    </ListGroup>
                    <div id='result'></div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
      </Row>
    </div>
  );
}

export default App;
