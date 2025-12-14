import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'; 

function OrderCard({ balance, date, time, location }) {
  return (
    <Card className="order-card-custom mx-auto shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <span className="material-icons me-2">🧾</span> 
          <Card.Title className="mb-0 fw-bold">Order</Card.Title>
        </div>
        
        <h1 className="fw-bolder">
          ₱{balance}
        </h1>
        
        <div className="mt-4 text-muted small">
          <p className="mb-0">[{date}], [{time}]</p>
          <p className="mb-0">[{location}]</p>
        </div>
      </Card.Body>
    </Card>
  );
}

function App() {
  const [orderData, setOrderData] = useState({
    balance: '120.50',
    date: '2025-12-14',
    time: '23:00',
    location: 'Cafe Aurora Branch',
  });

  const updateBalance = () => {
    const newBalance = (parseFloat(orderData.balance) + Math.random() * 10).toFixed(2);
    
    setOrderData({
      ...orderData, 
      balance: newBalance,
      time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    });
  };

  return (
    <Container fluid className="app-container p-3 p-md-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
            <span className="material-icons back-icon me-2">
              <a href="#" className="text-dark text-decoration-none">&#xe5c4;</a>
            </span>
            <h2 className="fw-normal mb-0">Kapebara</h2>
        </div>

        <button 
          onClick={updateBalance}
          className="btn btn-sm btn-success shadow-sm"
        >
          Update Balance
        </button>
      </div>

      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}> 
          <OrderCard 
            balance={orderData.balance}
            date={orderData.date}
            time={orderData.time}
            location={orderData.location}
          />
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;