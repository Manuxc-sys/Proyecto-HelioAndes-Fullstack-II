
import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";


function Soluciones() {
  return (
    <section id="soluciones" className="py-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
          <h2>Soluciones</h2>

          <p className="text-muted">Kit residenciales, PyME, Off-grid con baterías e híbridos</p>

        </div>

        <Row className="justify-content-center g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="panel-hogar.jpg" />
              <Card.Body>
                <Card.Title>Hogar 3-5 kW</Card.Title>
                <Card.Text>
                  Balance ideal entre costo y ahorro mensual.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="panel-pyme.jpg" />
              <Card.Body>
                <Card.Title>PyME 10-20 kW</Card.Title>
                <Card.Text>
                  Para operación continua y eficiente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Img variant="top" src="panel-off.jpg" />
                <Card.Title>Off-grid con baterías</Card.Title>
                <Card.Text>
                  Autonomía energética en zonas sin conexión.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>

    </section>


  );

}
export default Soluciones;