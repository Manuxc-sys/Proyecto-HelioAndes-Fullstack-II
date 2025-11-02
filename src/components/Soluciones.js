
import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Soluciones() {
    return (
        <section id="soluciones" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Soluciones</h2>

                    <p className="text-muted">Kit residenciales, PyME, Off-grid con baterías e híbridos</p>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>Estudio energético</Card.Title>
                                <Card.Text>
                                    Análisis de consumo y propuesta ajustada a tu perfil.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                           
                            <Card.Body>
                                <Card.Title>Instalación certificada</Card.Title>
                                <Card.Text>
                                    Ejecutada por personal acreditado y normativa vigente.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>Monitoreo</Card.Title>
                                <Card.Text>
                                    Seguimiento de rendimiento y alertas preventivas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    

                </div>


            </Container>

        </section>


    );

}
export default Soluciones;