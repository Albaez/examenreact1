import 'bootswatch/dist/lux/bootstrap.min.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FormularioNotas = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'nota1') {
      if (value <= 30) {
        setNota1(value);
      } else {
        Swal.fire('Error', 'La nota 1 no puede ser mayor a 30', 'error');
      }
    } else if (name === 'nota2') {
      if (value <= 30) {
        setNota2(value);
      } else {
        Swal.fire('Error', 'La nota 2 no puede ser mayor a 30', 'error');
      }
    } else if (name === 'nota3') {
      if (value <= 40) {
        setNota3(value);
      } else {
        Swal.fire('Error', 'La nota 3 no puede ser mayor a 40', 'error');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (nota1 === '' || nota2 === '' || nota3 === '') {
      Swal.fire('Error', 'Por favor ingrese todas las notas', 'error');
      return;
    }

    const notaFinal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    let mensaje = '';

    if (notaFinal >= 0 && notaFinal <= 59) {
      mensaje = 'Reprobado';
    } else if (notaFinal >= 60 && notaFinal <= 79) {
      mensaje = 'Bueno';
    } else if (notaFinal >= 80 && notaFinal <= 89) {
      mensaje = 'Muy Bueno';
    } else if (notaFinal >= 90 && notaFinal <= 100) {
      mensaje = 'Sobresaliente';
    }

    Swal.fire(`Nota Final: ${notaFinal}%`, mensaje, 'success');
  };

  return (
    <div className="container mt-5">
      <h1>Formulario de Notas</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nota1">Primer Parcial (30%)</label>
          <input
            type="number"
            className="form-control"
            id="nota1"
            name="nota1"
            value={nota1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nota2">Segundo Parcial (30%)</label>
          <input
            type="number"
            className="form-control"
            id="nota2"
            name="nota2"
            value={nota2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nota3">Tercer Parcial (40%)</label>
          <input
            type="number"
            className="form-control"
            id="nota3"
            name="nota3"
            value={nota3}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Calcular Nota Final</button>
      </form>
    </div>
  );
};

export default FormularioNotas;