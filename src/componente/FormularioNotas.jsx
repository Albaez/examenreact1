import React, { useState } from 'react';

const FormularioNotas = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nota1') {
      setNota1(value);
    } else if (name === 'nota2') {
      setNota2(value);
    } else if (name === 'nota3') {
      setNota3(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const notaFinal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    if (notaFinal >= 0 && notaFinal <= 59) {
      setMensaje('Reprobado');
    } else if (notaFinal >= 60 && notaFinal <= 79) {
      setMensaje('Bueno');
    } else if (notaFinal >= 80 && notaFinal <= 89) {
      setMensaje('Muy Bueno');
    } else if (notaFinal >= 90 && notaFinal <= 100) {
      setMensaje('Sobresaliente');
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de Notas</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nota1">Primer Parcial (30%):</label>
          <input
            type="number"
            className="form-control"
            id="nota1"
            name="nota1"
            value={nota1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nota2">Segundo Parcial (30%):</label>
          <input
            type="number"
            className="form-control"
            id="nota2"
            name="nota2"
            value={nota2}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nota3">Tercer Parcial (40%):</label>
          <input
            type="number"
            className="form-control"
            id="nota3"
            name="nota3"
            value={nota3}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Calcular</button>
      </form>
      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
    </div>
  );
};

export default FormularioNotas;