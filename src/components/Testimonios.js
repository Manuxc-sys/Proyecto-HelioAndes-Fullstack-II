
import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Testimonios() {
    return (
        <section id="testimonios" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Testimonios</h2>

                    <p className="text-muted">Clientes que ya confían en HelioAndes</p>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>Alejandra, Ñuñoa</Card.Title>
                                <Card.Text>
                                   Instalación rápida y eficiente. ¡Muy satisfecha con el servicio!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                           
                            <Card.Body>
                                <Card.Title>Macarena, La Florida</Card.Title>
                                <Card.Text>
                                   Excelente asesoría y soporte durante todo el proceso.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>Alejandro, Puerto Varas</Card.Title>
                                <Card.Text>
                                      Mi sistema solar funciona de maravilla, ¡lo recomiendo totalmente!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    

                </div>


            </Container>

        </section>


    );

}
export default Testimonios;