// src/components/Planes.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function Planes() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/planes')
      .then(response => setPlanes(response.data))
      .catch(error => {
        console.error('Error al cargar planes:', error);
       
      });
  }, []);

  const getBeneficios = (id) => {
    const beneficiosPorPlan = {
      1: ["Estudio energético", "Instalación certificada", "Monitoreo básico"],
      2: ["Estudio avanzado", "Instalación optimizada", "Monitoreo avanzado"],
      3: ["Diseño off-grid", "Almacenamiento", "Soporte preferente"]
    };
    return beneficiosPorPlan[id] || [];
  };


  const getRangoPotencia = (id) => {
    const rangos = {
      1: "3–5 kW",
      2: "10–15 kW",
      3: "Híbrido + baterías"
    };
    return rangos[id] || "";
  };

  return (
    <section id="planes" className="py-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
          <h2>Planes</h2>
          <p className="text-muted">Elije el plan que se adapta a tu proyecto.</p>
        </div>

        <Row className="justify-content-center g-4">
          {planes.map((plan) => (
            <Col key={plan.id} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center mb-3">
                    <span className="badge bg-primary mb-2">{plan.nombre}</span>
                    <Card.Title>{getRangoPotencia(plan.id)}</Card.Title>
                    <Card.Text>
                      {getBeneficios(plan.id).map((b, i) => (
                        <React.Fragment key={i}>
                          {b}
                          <br />
                        </React.Fragment>
                      ))}
                    </Card.Text>
                    <Button as="a" href="#contacto" variant="primary" className="w-100">
                      Solicitar evaluación
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Planes;