import './MedicineDetails.css';
function MedicineDetails(props) {
    const { medicine, onDelete, onEdit, onCalc} = props;
  
    return (
      <section className="selected-medicine">
        <div className="medicine-container">
          <div className="medicine-card">
            <div className="card-header">
              <h2>{medicine.name}</h2>
              <button className="delete-button" onClick={() => onDelete(medicine.id)}>Borrar</button>
              <button className="edit-button" onClick={() => onEdit(medicine.id)}>Editar</button>
              <button className="calculate-button" onClick={() => onCalc(medicine.id)}>Calcular</button>

            </div>
            <p>{medicine.details}</p>
            <div className="dosage-info">
                <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
                <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
                <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
                <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
                <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>                   </div>
          </div>
        </div>
      </section>
    );
  }
    
  export default MedicineDetails;