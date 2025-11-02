import React from "react";

function FAQ() {
    return (
        <section id="faq" className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-baseline mb-4">
                    <h2>Preguntas Frecuentes (FAQ)</h2>
                    <p className="text-muted">Respuestas a las dudas más comunes</p>
                </div>

                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿Cuánto tiempo tarda la instalación de un sistema solar?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                El tiempo de instalación varía según el tamaño del sistema, pero generalmente toma entre 1 a 3 días hábiles.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ¿Ofrecen financiamiento para los sistemas solares?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Sí, contamos con diversas opciones de financiamiento para facilitar la adquisición de tu sistema solar.
                            </div>

                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                ¿Qué tipo de mantenimiento requiere un sistema solar?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Los sistemas solares requieren un mantenimiento mínimo, principalmente limpieza de paneles y revisiones periódicas para asegurar su óptimo funcionamiento.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
