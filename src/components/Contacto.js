import React from "react";
import Form from 'react-bootstrap/Form';
function Contacto() {
    return (
        <section id="contacto" className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Contacto</h2>
                    <p className="text-muted">Cuéntanos tu proyecto y agenda una asesoría.</p>
                </div>
                <Form>

                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre y apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="tucorreo@ejemplo.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control placeholder ="Describe tu comentario" as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
        </section>
    );
} export default Contacto;


