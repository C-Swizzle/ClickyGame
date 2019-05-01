import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Col from "./components/Col";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/Container";
import Row from "./components/Row";
import CardContainer from "./components/CardContainer";
import character from "./characters.json";
function App() {
  return (
    <>
    <Header />
    <Container >
    <Row>
    <CardContainer />
    </Row>
    </Container>
    </>
  );
}

export default App;
