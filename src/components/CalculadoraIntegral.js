// src/components/CalculadoraIntegral.js
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function CalculadoraIntegral() {
    // Estados del formulario
    const [potenciaPanel, setPotenciaPanel] = useState(450);
    const [cantidadPaneles, setCantidadPaneles] = useState(8);
    const [precioInversor, setPrecioInversor] = useState(650000);
    const [precioBateria, setPrecioBateria] = useState(320000);
    const [cantidadBaterias, setCantidadBaterias] = useState(0); // puede ser 0
    const [precioEstructuras, setPrecioEstructuras] = useState(180000);
    const [precioInstalacionBase, setPrecioInstalacionBase] = useState(350000);
    const [pesoEnvio, setPesoEnvio] = useState(90);

    // Selects
    const [tipoTecho, setTipoTecho] = useState("teja");
    const [region, setRegion] = useState("rm");
    const [complejidad, setComplejidad] = useState("baja");
    const [subsidio, setSubsidio] = useState("ninguno");
    const [metodoEnvio, setMetodoEnvio] = useState("estandar");
    const [garantia, setGarantia] = useState("12");
    const [planPago, setPlanPago] = useState("contado");
    const [tipoPie, setTipoPie] = useState("porcentaje");
    const [valorPie, setValorPie] = useState(10);

    // === CÁLCULOS DIRECTOS (sin funciones) ===

    // Potencia estimada
    const potenciaEstimada = (parseFloat(potenciaPanel) * parseInt(cantidadPaneles)) / 1000;

    // Subtotal equipos (paneles NO se incluyen en el costo, solo para referencia)
    const subtotalEquipos =
        parseFloat(precioInversor) +
        parseFloat(precioBateria) * parseInt(cantidadBaterias) +
        parseFloat(precioEstructuras);

    // Recargo por techo (% sobre subtotalEquipos)
    let recargoTechoPorc = 0;
    if (tipoTecho === "teja") recargoTechoPorc = 5;
    else if (tipoTecho === "zinc") recargoTechoPorc = 2;
    else if (tipoTecho === "hormigon") recargoTechoPorc = 7;
    const recargoTecho = subtotalEquipos * (recargoTechoPorc / 100);

    // Subsidio (% negativo sobre subtotalEquipos, aplicado después del recargo)
    let subsidioPorc = 0;
    if (subsidio === "residencial") subsidioPorc = 8;
    else if (subsidio === "pyme") subsidioPorc = 5;
    const montoSubsidio = subtotalEquipos * (subsidioPorc / 100);

    // Equipos con recargo y subsidio
    const equiposConRecargo = subtotalEquipos + recargoTecho;
    const equiposDespuesSubsidio = equiposConRecargo - montoSubsidio;

    // Instalación final
    let recargoInstalacionPorc = 0;
    if (complejidad === "media") recargoInstalacionPorc = 8;
    else if (complejidad === "alta") recargoInstalacionPorc = 15;
    const instalacionFinal = parseFloat(precioInstalacionBase) * (1 + recargoInstalacionPorc / 100);

    // Envío
    let baseEnvio = 5000;
    if (region === "norte") baseEnvio = 9000;
    else if (region === "sur") baseEnvio = 10000;
    else if (region === "austral") baseEnvio = 15000;
    const costoEnvioSinExprés = baseEnvio + parseFloat(pesoEnvio) * 700;
    const costoEnvio = metodoEnvio === "expres" ? costoEnvioSinExprés * 1.2 : costoEnvioSinExprés;

    // Garantía (% sobre subtotalEquipos, antes de subsidio)
    let garantiaPorc = 0;
    if (garantia === "12") garantiaPorc = 2;
    else if (garantia === "24") garantiaPorc = 4;
    else if (garantia === "36") garantiaPorc = 6;
    const montoGarantia = subtotalEquipos * (garantiaPorc / 100);

    // IVA: 19% sobre (equiposDespuesSubsidio + instalacionFinal)
    const baseImponibleIVA = equiposDespuesSubsidio + instalacionFinal;
    const iva = baseImponibleIVA * 0.19;

    // Total antes de financiar
    const totalAntesFinanciar = baseImponibleIVA + iva + costoEnvio + montoGarantia;

    // Pie
    let pie = 0;
    if (tipoPie === "porcentaje") {
        pie = totalAntesFinanciar * (parseFloat(valorPie || 0) / 100);
    } else {
        pie = parseFloat(valorPie || 0);
    }
    if (pie > totalAntesFinanciar) pie = totalAntesFinanciar;

    // Financiamiento
    let cuota = 0;
    let interesTotal = 0;
    let totalFinal = totalAntesFinanciar;

    if (planPago !== "contado") {
        const nCuotas = parseInt(planPago);
        let tasaMensual = 0;
        if (nCuotas === 6) tasaMensual = 0.012;
        else if (nCuotas === 12) tasaMensual = 0.011;
        else if (nCuotas === 24) tasaMensual = 0.01;

        const montoFinanciar = totalAntesFinanciar - pie;
        interesTotal = montoFinanciar * tasaMensual * nCuotas;
        cuota = (montoFinanciar + interesTotal) / nCuotas;
        totalFinal = pie + montoFinanciar + interesTotal;
    }

    // Advertencia si potencia > 7 kW y sin baterías
    const mostrarAdvertencia = potenciaEstimada > 7 && parseInt(cantidadBaterias) === 0;

    // Reiniciar formulario
    const handleReset = () => {
        setPotenciaPanel(450);
        setCantidadPaneles(8);
        setPrecioInversor(650000);
        setPrecioBateria(320000);
        setCantidadBaterias(0);
        setPrecioEstructuras(180000);
        setPrecioInstalacionBase(350000);
        setPesoEnvio(90);
        setTipoTecho("teja");
        setRegion("rm");
        setComplejidad("baja");
        setSubsidio("ninguno");
        setMetodoEnvio("estandar");
        setGarantia("12");
        setPlanPago("contado");
        setTipoPie("porcentaje");
        setValorPie(10);
    };

    return (
        <section id="demo-calculadora" className="py-5 bg-light">
            <div className="container">
                <div className='d-flex justify-content-between align-items-baseline mb-4'>
                    <h3>DEMO calculadora integral</h3>
                </div>
                

                <div className="row g-4 mt-3">
                    {/* Formulario */}
                    <div className="col-12 col-lg-6">
                        <div className="bg-white p-4 rounded shadow-sm h-100">
                            <h5 className="mb-3">Configura tu sistema</h5>

                            {/* Potencia y paneles */}
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Potencia panel (W)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={potenciaPanel}
                                        onChange={(e) => setPotenciaPanel(e.target.value)}
                                        min="0"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Cantidad paneles</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={cantidadPaneles}
                                        onChange={(e) => setCantidadPaneles(e.target.value)}
                                        min="0"
                                    />
                                </div>
                            </div>

                            {/* Equipos */}
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Inversor ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={precioInversor}
                                        onChange={(e) => setPrecioInversor(e.target.value)}
                                        min="0"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Batería ($/unidad)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={precioBateria}
                                        onChange={(e) => setPrecioBateria(e.target.value)}
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Cant. baterías</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={cantidadBaterias}
                                        onChange={(e) => setCantidadBaterias(e.target.value)}
                                        min="0"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Estruct./cableado ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={precioEstructuras}
                                        onChange={(e) => setPrecioEstructuras(e.target.value)}
                                        min="0"
                                    />
                                </div>
                            </div>

                            {/* Instalación y envío */}
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Instalación base ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={precioInstalacionBase}
                                        onChange={(e) => setPrecioInstalacionBase(e.target.value)}
                                        min="0"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Peso envío (kg)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={pesoEnvio}
                                        onChange={(e) => setPesoEnvio(e.target.value)}
                                        min="0"
                                    />
                                </div>
                            </div>

                            {/* Selects */}
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de techo</label>
                                    <select
                                        className="form-select"
                                        value={tipoTecho}
                                        onChange={(e) => setTipoTecho(e.target.value)}
                                    >
                                        <option value="teja">Teja/Asfalto (+5%)</option>
                                        <option value="zinc">Zinc/Planchas (+2%)</option>
                                        <option value="hormigon">Hormigón (+7%)</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Región</label>
                                    <select
                                        className="form-select"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                    >
                                        <option value="rm">RM ($5.000)</option>
                                        <option value="norte">Norte ($9.000)</option>
                                        <option value="sur">Sur ($10.000)</option>
                                        <option value="austral">Austral ($15.000)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Complejidad instalación</label>
                                    <select
                                        className="form-select"
                                        value={complejidad}
                                        onChange={(e) => setComplejidad(e.target.value)}
                                    >
                                        <option value="baja">Baja (0%)</option>
                                        <option value="media">Media (+8%)</option>
                                        <option value="alta">Alta (+15%)</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Subsidio</label>
                                    <select
                                        className="form-select"
                                        value={subsidio}
                                        onChange={(e) => setSubsidio(e.target.value)}
                                    >
                                        <option value="ninguno">Sin subsidio</option>
                                        <option value="residencial">Residencial (-8%)</option>
                                        <option value="pyme">Pyme (-5%)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Método de envío</label>
                                    <select
                                        className="form-select"
                                        value={metodoEnvio}
                                        onChange={(e) => setMetodoEnvio(e.target.value)}
                                    >
                                        <option value="estandar">Estándar (x1.00)</option>
                                        <option value="expres">Exprés (x1.20)</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Garantía</label>
                                    <select
                                        className="form-select"
                                        value={garantia}
                                        onChange={(e) => setGarantia(e.target.value)}
                                    >
                                        <option value="12">12 meses (+2%)</option>
                                        <option value="24">24 meses (+4%)</option>
                                        <option value="36">36 meses (+6%)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Plan de pago</label>
                                    <select
                                        className="form-select"
                                        value={planPago}
                                        onChange={(e) => setPlanPago(e.target.value)}
                                    >
                                        <option value="contado">Contado</option>
                                        <option value="6">6 cuotas</option>
                                        <option value="12">12 cuotas</option>
                                        <option value="24">24 cuotas</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Tipo de pie</label>
                                    <select
                                        className="form-select"
                                        value={tipoPie}
                                        onChange={(e) => setTipoPie(e.target.value)}
                                    >
                                        <option value="porcentaje">Porcentaje</option>
                                        <option value="monto">Monto fijo</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Valor de pie {tipoPie === "porcentaje" ? "(%)" : "($)"}
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={valorPie}
                                    onChange={(e) => setValorPie(e.target.value)}
                                    min="0"
                                />
                            </div>

                            {/* Advertencia dinámica */}
                            {mostrarAdvertencia && (
                                <div className="alert alert-warning small">
                                    ⚠️ Recomendado considerar almacenamiento para estabilidad del sistema.
                                </div>
                            )}

                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary" onClick={handleReset}>
                                    Reiniciar
                                </button>
                                <button className="btn btn-outline-primary">
                                    Copiar resumen
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resultados */}
                    <div className="col-12 col-lg-6">
                        <div className="bg-white p-4 rounded shadow-sm h-100">
                            <h5 className="mb-3">Resumen de cotización</h5>
                            <Table striped bordered size="sm">
                                <tbody>
                                    <tr><td>Potencia estimada</td><td>{potenciaEstimada.toFixed(2)} kW</td></tr>
                                    <tr><td>Subtotal equipos</td><td>${subtotalEquipos.toLocaleString()}</td></tr>
                                    <tr><td>+ Recargo techo ({recargoTechoPorc}%)</td><td>${recargoTecho.toLocaleString()}</td></tr>
                                    <tr><td>- Subsidio ({subsidioPorc}%)</td><td>-${montoSubsidio.toLocaleString()}</td></tr>
                                    <tr><td>Instalación final</td><td>${instalacionFinal.toLocaleString()}</td></tr>
                                    <tr><td>+ IVA (19%)</td><td>${iva.toLocaleString()}</td></tr>
                                    <tr><td>Envío</td><td>${costoEnvio.toLocaleString()}</td></tr>
                                    <tr><td>+ Garantía ({garantiaPorc}%)</td><td>${montoGarantia.toLocaleString()}</td></tr>
                                    <tr><td><strong>Total antes de financiar</strong></td><td><strong>${totalAntesFinanciar.toLocaleString()}</strong></td></tr>
                                    <tr><td>Pie</td><td>${pie.toLocaleString()}</td></tr>
                                    {planPago !== "contado" && (
                                        <>
                                            <tr><td>Interés total</td><td>${interesTotal.toLocaleString()}</td></tr>
                                            <tr><td>Cuota ({planPago}x)</td><td>${cuota.toLocaleString()}</td></tr>
                                        </>
                                    )}
                                    <tr className="table-success">
                                        <td><strong>Total final</strong></td>
                                        <td><strong>${totalFinal.toLocaleString()}</strong></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <small className="text-muted">
                                Valores referenciales. Cotización no vinculante.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CalculadoraIntegral;