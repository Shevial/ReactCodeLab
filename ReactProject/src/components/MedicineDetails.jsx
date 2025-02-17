import './MedicineDetails.css';
function MedicineDetails(props) {
    const { medicine, onEdit, onDelete } = props;
  
    const handleEdit = () => {
      onEdit(medicine.id); 
    };
  
    const handleDelete = () => {
      onDelete(medicine.id); 
    };
  
    return (
      <section className="selected-medicine">
        <div className="medicine-container">
          <li className="medicine-card">
            <div className="card-header">
              <h2 className="medicine-name">{medicine.name || 'Medicamento desconocido'}</h2>
              <div className="button-container">
                <button className="edit-button" onClick={handleEdit}>Editar</button>
                <button className="delete-button" onClick={handleDelete}>Borrar</button>
              </div>
            </div>
            <p className="details">{medicine.details || 'Sin detalles adicionales'}</p>
            <div className="dosage-info">
            <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
                <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
                <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
                <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
                <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>            </div>
          </li>
        </div>
      </section>
    );
  }
  
  export default MedicineDetails;
  
    