import React from "react";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

function Servicios() {
    return (

        <section id="servicios" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Servicios</h2>

                    <p className=" text-muted">Estudio energético, instalación certificada, Monitoreo y mantención</p>

                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="analisis.png" />
                            <Card.Body>
                                <Card.Title>Estudio energético</Card.Title>
                                <Card.Text>
                                    Análisis de consumo y propuesta ajustada a tu perfil.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="instalacion.png" />
                            <Card.Body>
                                <Card.Title>Instalación certificada</Card.Title>
                                <Card.Text>
                                    Ejecutada por personal acreditado y normativa vigente.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="monitoreo.png" />
                            <Card.Body>
                                <Card.Title>Monitoreo</Card.Title>
                                <Card.Text>
                                    Seguimiento de rendimiento y alertas preventivas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="mantencion.png" />
                            <Card.Body>
                                <Card.Title>Mantención</Card.Title>
                                <Card.Text>
                                    Planes periódicos para extender la vida útil del sistema.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </Container>

        </section>


    );


}

export default Servicios;