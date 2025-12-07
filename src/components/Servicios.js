// src/components/Servicios.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/servicios')
      .then(response => setServicios(response.data))
      .catch(error => {
        console.error('Error al cargar servicios:', error);
        
      });
  }, []);

  const getImagen = (id) => {
    const imagenes = {
      1: 'analisis.png',
      2: 'instalacion.png',
      3: 'monitoreo.png',
      4: 'mantencion.png'
    };
    return imagenes[id] || 'servicio-default.png';
  };

  return (
    <section id="servicios" className="py-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-baseline mb-4">
          <h2>Servicios</h2>
          <p className="text-muted">
            Estudio energético, instalación certificada, Monitoreo y mantención
          </p>
        </div>

        <Row className="justify-content-center g-4">
          {servicios.map((servicio) => (
            <Col key={servicio.id} xs={12} md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={getImagen(servicio.id)} />
                <Card.Body>
                  <Card.Title>{servicio.nombre}</Card.Title>
                  <Card.Text>{servicio.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Servicios;