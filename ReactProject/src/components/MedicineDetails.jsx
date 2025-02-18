import'./MedicineDetails.css';

function MedicineDetails(props) {
  const { medicine, onDelete, onEdit, onCalculate } = props;

  return (
    <section className="selected-medicine">
      <div className="medicine-container">
        <div className="medicine-card">
          <div className="card-header">
            <h2>{medicine.name}</h2>
            <div className="button-container">
              <button className="edit-button" onClick={onEdit}>Editar</button>
              <button className="calculate-button" onClick={onCalculate}>Calcular</button>
              <button className="delete-button" onClick={() => onDelete(medicine.id)}>
                Borrar
              </button>
            </div>
          </div>
          <p className="details">{medicine.details}</p>
          <div className="dosage-info">
            <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
            <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
            <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
            <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
            <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicineDetails;