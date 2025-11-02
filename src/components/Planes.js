
import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Planes() {
    return (
        <section id="planes" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Planes</h2>

                    <p className="text-muted">Elije el plan que se adapta a tu proyecto.</p>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <div className="text-center mb-3">
                                    <span className="badge bg-primary mb-2">Básico</span>
                                    <Card.Title>3-5 kW</Card.Title>
                                    <Card.Text>
                                        Estudio energético <br/>
                                        instalación certificada <br/>
                                        Monitoreo básico
                                    </Card.Text>
                                     <Button variant="primary">Solicitar evaluación</Button>


                                </div>


                               

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                              <div className="text-center mb-3">
                                    <span className="badge bg-primary mb-2">Optimizado</span>
                                    <Card.Title>10-15 kW</Card.Title>
                                    <Card.Text>
                                        Estudio avanzado <br/>
                                        instalación optimizada <br/>
                                        Monitoreo avanzado
                                    </Card.Text>
                                     <Button variant="primary">Solicitar evaluación</Button>


                                </div>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                               <div className="text-center mb-3">
                                    <span className="badge bg-primary mb-2">Autónomo</span>
                                    <Card.Title>Híbrido + baterías kW</Card.Title>
                                    <Card.Text>
                                        Diseño off-grid <br/>
                                        Almacenamiento <br/>
                                        Soporte preferente
                                    </Card.Text>
                                     <Button variant="primary">Solicitar evaluación</Button>


                                </div>

                            </Card.Body>
                        </Card>
                    </div>


                </div>


            </Container>

        </section>


    );

}
export default Planes;