import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GIF from "./images/Algebra_logo.gif";
import { Widget } from '@typeform/embed-react'






function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])


  return (
  <div className="home">
    {
      loading ? (
        <div style={{textAlign: "center"}}>
      <img src={GIF} loading={loading} class="opener" />
      </div>

      ) : (
        <>
        <Container>

      <br></br>
      FAT
      <br></br>
      <br></br>
      <Widget id="w7tbJoxg" style={{ width: '100%', height: "100vh" }} className="my-form" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="thesis">
        </section>
        <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <section id="demo">
        </section>
        <br></br>
        <Row>
          <Col>
          </Col>
        </Row>
        <section id="space">
        </section>
        <section id="claim">
        </section>

        <br></br>
        </Container>
        </>
)
      }





    </div>
  );
}

export default Home;
