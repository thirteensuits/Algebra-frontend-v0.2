import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GIF from "./images/Algebra_logo.gif";
import { Widget } from '@typeform/embed-react'
import { NavHashLink as Link } from 'react-router-hash-link';


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
      <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}>
      <b>reimagine commerce</b>
      </h2>
      <h5 style={{textAlign: "center"}}>
      <i>enabling full-chain transactions for everyday products</i>
      </h5>
      <br></br>
      <Row>
        <Col>
        interested in building physical products for full-chain commerce?
        <br></br>
        <br></br>
        we are looking to partner with influencers and product creators to explore the future of commerce.
        <br></br>
        <br></br>
        <Link to="/#contact"><button style={{paddingLeft: 20, paddingRight: 20, marginLeft: 20 }}>Contact Us</button></Link>
        </Col>
        <Col>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="thesis">
      <Row>
        <Col>

        </Col>
        <Col>
        check out our brief thesis
        </Col>
      </Row>
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
      <section id="contact">
      <Widget id="w7tbJoxg" style={{ width: '100%', height: "100vh" }} className="my-form" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
      </div>
      <section id="demo">
      <br></br>
      <br></br>
      <br></br>
      check out a demo of our protocol in action on the Rinkeby testnet
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </section>
      </>
)
      }

    </div>
  );
}

export default Home;
