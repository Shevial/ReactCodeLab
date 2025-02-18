import { useState } from 'react';

function CalculationForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    age: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="medicine-form">
      <h3>Datos del Paciente</h3>
      
      <label>
        Edad (años):
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          min="0"
        />
      </label>

      <label>
        Peso (kg):
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
          min="0"
        />
      </label>

      <div className="form-buttons">
        <button type="submit">Calcular</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default CalculationForm;