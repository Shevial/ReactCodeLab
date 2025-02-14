function MedicineDetails(props) {
    const{medicine} = props;
  return (
    <section className="selected-medicine">
        <div className="medicine-container">
            <li className="medicine-card">
                <h2 className="medicine-name">{medicine.name || 'Medicamento desconocido'}</h2>
                <p className="details">{medicine.details || 'Sin detalles adicionales'}</p>
            <div className="dosage-info">
                <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
                <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
                <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
                <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
                <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>
            </div>
            </li>

        </div>
    </section>
  )
}

export default MedicineDetails