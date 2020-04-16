import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavbarTop from './NavbarTop';
import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <NavbarTop />

    <main role="main">
      <Jumbotron>
        <Container>
        <h1 className="display-3">Identification numbers</h1>
        <p>
            Here you will find the most useful generators and validators of various types of identification numbers.
            Validators of this type are useful both in everyday life and at work.
            Below you can find three main categories.
        </p>
        <p>
            The site is still under construction</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
           <Col md="8">
              <h2>Personal</h2>
              <p>A national identification number, national identity number, or national insurance number is used by the governments of many countries as a means of tracking their citizens, permanent residents, and temporary residents for the purposes of work, taxation, government benefits, health care, and other governmentally-related functions. The number appears on identity documents issued by several countries.</p>
              <p><Button variant="secondary">View details »</Button></p>
           </Col>
           <Col md="4">
              <h2>Vehicle</h2>
              <p>A vehicle identification number (VIN) is a unique code, including a serial number, used by the automotive industry to identify individual motor vehicles, towed vehicles, motorcycles, scooters and mopeds.</p>
              <p><Button variant="secondary">View details »</Button></p>
           </Col>
           <Col md="4">
              <h2>Other</h2>
              <p>And many others</p>
              <p><Button variant="secondary">View details »</Button></p>
           </Col>
        </Row>
        <hr/>
      </Container>
    </main>

    <footer>
      <Container>
        <p>© Company 2017-2018</p>
      </Container>
    </footer>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
