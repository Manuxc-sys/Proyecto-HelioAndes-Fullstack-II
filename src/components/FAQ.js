import React from "react";
import { Accordion, Container } from "react-bootstrap";
function FAQ() {
    return (
        <section id="faq" className="py-5">
            <Container>
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Preguntas Frecuentes (FAQ)</h2>
                    <p className="text-muted">Respuestas a las dudas más comunes</p>
                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Qué garantía ofrecen los equipos?</Accordion.Header>
                        <Accordion.Body>
                            Ofrecemos garantía de fábrica: 10 años en paneles, 5 años en inversores, y 2 años en instalación eléctrica certificada por la SEC.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Incluyen mantención?</Accordion.Header>
                        <Accordion.Body>
                            Sí, incluimos una mantención preventiva anual en todos nuestros planes. También ofrecemos contratos de mantención extendida.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Cómo funciona el monitoreo?</Accordion.Header>
                        <Accordion.Body>
                            Instalamos un sistema de monitoreo en tiempo real accesible desde tu celular o computador. Podrás ver generación, ahorro y estado del sistema.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>¿Cuánto tiempo demora la instalación?</Accordion.Header>
                        <Accordion.Body>
                            Desde la aprobación del diseño, la instalación toma entre 3 y 7 días hábiles, dependiendo de la complejidad del sistema.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>¿Qué requisitos eléctricos debe cumplir mi propiedad?</Accordion.Header>
                        <Accordion.Body>
                            Debe contar con medidor bidireccional (lo gestionamos con la compañía distribuidora) y una instalación eléctrica en buen estado, conforme a norma SEC.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default FAQ;
