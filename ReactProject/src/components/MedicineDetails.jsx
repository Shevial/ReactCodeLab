function MedicineDetails(props) {
    const{medicine} = props;
  return (
    <section className="selected-medicine">
        <div className="medicine-container">
            <h2 className="text">{medicine.name}</h2>
            <div className="dosage-info">
                <p>Dosis mínima: {medicine.dosage?.minimum_factor ?? 'N/A'}</p>
                <p>Dosis máxima: {medicine.dosage?.maximum_factor ?? 'N/A'}</p>
                <p>Frecuencia: {medicine.dosage?.dosage_frequency ?? 'N/A'}</p>
                <p>Máximo diario: {medicine.dosage?.max_daily_dose ?? 'N/A'}</p>
                <p>Peso promedio: {medicine.dosage?.avg_weight ?? 'N/A'}</p>
            </div>
        </div>
    </section>
  )
}

export default MedicineDetails