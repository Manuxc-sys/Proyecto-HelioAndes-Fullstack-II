// src/components/CalculadoraIntegral.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function CalculadoraIntegral() {
  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    // Equipos
    inversorPrecio: '',
    bateriasPrecio: '',
    bateriasCantidad: '',
    estructurasCableado: '',
    pesoEnvio: '',

    // Selects
    tipoTecho: 'teja', // teja, zinc, hormigon
    region: 'rm', // rm, norte, sur, austral
    complejidad: 'baja', // baja, media, alta
    subsidio: 'ninguno', // ninguno, residencial, pyme
    envio: 'estandar', // estandar, expres
    garantia: '12', // 12, 24, 36
    planPago: 'contado', // contado, 6, 12, 24
    tipoPie: 'porcentaje', // porcentaje o monto
    valorPie: '10', // 10% o $100000
  });

  // Función para actualizar cualquier campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Reiniciar formulario
  const handleReset = () => {
    setFormData({
      inversorPrecio: '',
      bateriasPrecio: '',
      bateriasCantidad: '',
      estructurasCableado: '',
      pesoEnvio: '',
      tipoTecho: 'teja',
      region: 'rm',
      complejidad: 'baja',
      subsidio: 'ninguno',
      envio: 'estandar',
      garantia: '12',
      planPago: 'contado',
      tipoPie: 'porcentaje',
      valorPie: '10',
    });
  };

  // === CÁLCULOS ===
  const calcular = () => {
    const {
      inversorPrecio,
      bateriasPrecio,
      bateriasCantidad,
      estructurasCableado,
      pesoEnvio,
      tipoTecho,
      region,
      complejidad,
      subsidio,
      envio,
      garantia,
      planPago,
      tipoPie,
      valorPie,
    } = formData;

    // Convertir a números (si están vacíos, usar 0)
    const inv = parseFloat(inversorPrecio) || 0;
    const batP = parseFloat(bateriasPrecio) || 0;
    const batC = parseFloat(bateriasCantidad) || 0;
    const estr = parseFloat(estructurasCableado) || 0;
    const peso = parseFloat(pesoEnvio) || 0;

    // Subtotal equipos
    let subtotalEquipos = inv + batP * batC + estr;

    // Recargo por techo
    let recargoTechoPorc = 0;
    if (tipoTecho === 'teja') recargoTechoPorc = 5;
    else if (tipoTecho === 'zinc') recargoTechoPorc = 2;
    else if (tipoTecho === 'hormigon') recargoTechoPorc = 7;
    const recargoTecho = subtotalEquipos * (recargoTechoPorc / 100);

    // Subsidio
    let subsidioPorc = 0;
    if (subsidio === 'residencial') subsidioPorc = 8;
    else if (subsidio === 'pyme') subsidioPorc = 5;
    const montoSubsidio = subtotalEquipos * (subsidioPorc / 100);

    // Equipos finales (con recargo, antes de subsidio)
    const equiposConRecargo = subtotalEquipos + recargoTecho;
    const equiposDespuesSubsidio = equiposConRecargo - montoSubsidio;

    // Instalación base (fija en $200.000 para este ejemplo)
    const instalacionBase = 200000;
    let recargoInstalacionPorc = 0;
    if (complejidad === 'media') recargoInstalacionPorc = 8;
    else if (complejidad === 'alta') recargoInstalacionPorc = 15;
    const instalacionFinal = instalacionBase * (1 + recargoInstalacionPorc / 100);

    // Envío
    let baseEnvio = 5000;
    if (region === 'norte') baseEnvio = 9000;
    else if (region === 'sur') baseEnvio = 10000;
    else if (region === 'austral') baseEnvio = 15000;
    const costoEnvioSinExprés = baseEnvio + peso * 700;
    const costoEnvio = envio === 'expres' ? costoEnvioSinExprés * 1.2 : costoEnvioSinExprés;

    // Garantía
    const garantiaPorc = parseInt(garantia) === 12 ? 2 : parseInt(garantia) === 24 ? 4 : 6;
    const montoGarantia = subtotalEquipos * (garantiaPorc / 100);

    // Total antes de financiar
    const subtotalAntesIVA = equiposDespuesSubsidio + instalacionFinal + costoEnvio + montoGarantia;
    const iva = subtotalAntesIVA * 0.19;
    const totalAntesFinanciar = subtotalAntesIVA + iva;

    // Financiamiento
    let pie = 0;
    if (tipoPie === 'porcentaje') {
      const pct = parseFloat(valorPie) || 0;
      pie = totalAntesFinanciar * (pct / 100);
    } else {
      pie = parseFloat(valorPie) || 0;
    }
    if (pie > totalAntesFinanciar) pie = totalAntesFinanciar;

    let cuota = 0;
    let interesTotal = 0;
    let totalFinal = totalAntesFinanciar;

    if (planPago !== 'contado') {
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

    return {
      subtotalEquipos,
      recargoTecho,
      montoSubsidio,
      instalacionFinal,
      costoEnvio,
      montoGarantia,
      iva,
      totalAntesFinanciar,
      pie,
      interesTotal,
      cuota,
      totalFinal,
      planPago,
    };
  };

  const resultados = calcular();

  return (
    <section id="demo-calculadora" className="py-5 bg-light">
      <Container>
        <div className='d-flex justify-content-between align-items-baseline mb-4'>
            <h2>DEMO</h2>
        <p className="text-muted">
          Simula el costo de tu sistema solar en minutos
        </p>

        </div>
        

        <Row className="g-4">
          {/* Formulario */}
          <Col xs={12} lg={6}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Configura tu sistema</h5>
              <Form>
                {/* Equipos */}
                <Form.Group className="mb-3">
                  <Form.Label>Precio del inversor ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="inversorPrecio"
                    value={formData.inversorPrecio}
                    onChange={handleChange}
                    placeholder="Ej: 300000"
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Precio por batería ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="bateriasPrecio"
                    value={formData.bateriasPrecio}
                    onChange={handleChange}
                    placeholder="0 si no usas"
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Cantidad de baterías</Form.Label>
                  <Form.Control
                    type="number"
                    name="bateriasCantidad"
                    value={formData.bateriasCantidad}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Estructuras y cableado ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="estructurasCableado"
                    value={formData.estructurasCableado}
                    onChange={handleChange}
                    placeholder="Ej: 150000"
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Peso estimado del envío (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    name="pesoEnvio"
                    value={formData.pesoEnvio}
                    onChange={handleChange}
                    placeholder="Ej: 80"
                    min="0"
                  />
                </Form.Group>

                {/* Selects */}
                <Form.Group className="mb-3">
                  <Form.Label>Tipo de techo</Form.Label>
                  <Form.Select name="tipoTecho" value={formData.tipoTecho} onChange={handleChange}>
                    <option value="teja">Teja / Asfalto (+5%)</option>
                    <option value="zinc">Zinc / Planchas (+2%)</option>
                    <option value="hormigon">Hormigón (+7%)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Región (envío)</Form.Label>
                  <Form.Select name="region" value={formData.region} onChange={handleChange}>
                    <option value="rm">Metropolitana ($5.000 base)</option>
                    <option value="norte">Norte ($9.000)</option>
                    <option value="sur">Sur ($10.000)</option>
                    <option value="austral">Austral ($15.000)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Complejidad de instalación</Form.Label>
                  <Form.Select name="complejidad" value={formData.complejidad} onChange={handleChange}>
                    <option value="baja">Baja (0%)</option>
                    <option value="media">Media (+8%)</option>
                    <option value="alta">Alta (+15%)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subsidio referencial</Form.Label>
                  <Form.Select name="subsidio" value={formData.subsidio} onChange={handleChange}>
                    <option value="ninguno">Sin subsidio</option>
                    <option value="residencial">Residencial (-8%)</option>
                    <option value="pyme">Pyme (-5%)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Método de envío</Form.Label>
                  <Form.Select name="envio" value={formData.envio} onChange={handleChange}>
                    <option value="estandar">Estándar</option>
                    <option value="expres">Exprés (+20%)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Garantía extendida</Form.Label>
                  <Form.Select name="garantia" value={formData.garantia} onChange={handleChange}>
                    <option value="12">12 meses (+2%)</option>
                    <option value="24">24 meses (+4%)</option>
                    <option value="36">36 meses (+6%)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Plan de pago</Form.Label>
                  <Form.Select name="planPago" value={formData.planPago} onChange={handleChange}>
                    <option value="contado">Contado</option>
                    <option value="6">6 cuotas</option>
                    <option value="12">12 cuotas</option>
                    <option value="24">24 cuotas</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tipo de pie</Form.Label>
                  <Form.Select name="tipoPie" value={formData.tipoPie} onChange={handleChange}>
                    <option value="porcentaje">Porcentaje del total</option>
                    <option value="monto">Monto fijo ($)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    {formData.tipoPie === 'porcentaje' ? 'Porcentaje (%)' : 'Monto ($)'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="valorPie"
                    value={formData.valorPie}
                    onChange={handleChange}
                    min="0"
                    placeholder={formData.tipoPie === 'porcentaje' ? '10' : '100000'}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="secondary" onClick={handleReset}>
                    Reiniciar
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* Resultados */}
          <Col xs={12} lg={6}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Resumen de cotización</h5>
              <Table striped bordered size="sm">
                <tbody>
                  <tr><td>Subtotal equipos</td><td>${resultados.subtotalEquipos.toLocaleString()}</td></tr>
                  <tr><td>+ Recargo techo</td><td>${resultados.recargoTecho.toLocaleString()}</td></tr>
                  <tr><td>- Subsidio</td><td>-${resultados.montoSubsidio.toLocaleString()}</td></tr>
                  <tr><td>Instalación final</td><td>${resultados.instalacionFinal.toLocaleString()}</td></tr>
                  <tr><td>Envío</td><td>${resultados.costoEnvio.toLocaleString()}</td></tr>
                  <tr><td>+ Garantía</td><td>${resultados.montoGarantia.toLocaleString()}</td></tr>
                  <tr><td>+ IVA (19%)</td><td>${resultados.iva.toLocaleString()}</td></tr>
                  <tr><td><strong>Total antes de financiar</strong></td><td><strong>${resultados.totalAntesFinanciar.toLocaleString()}</strong></td></tr>
                  <tr><td>Pie</td><td>${resultados.pie.toLocaleString()}</td></tr>
                  {resultados.planPago !== 'contado' && (
                    <>
                      <tr><td>Interés total</td><td>${resultados.interesTotal.toLocaleString()}</td></tr>
                      <tr><td>Cuota mensual ({resultados.planPago}x)</td><td>${resultados.cuota.toLocaleString()}</td></tr>
                    </>
                  )}
                  <tr><td><strong>Total final</strong></td><td><strong>${resultados.totalFinal.toLocaleString()}</strong></td></tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CalculadoraIntegral;