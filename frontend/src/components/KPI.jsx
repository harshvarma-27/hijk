export default function KPI({ title, value, subtitle }) {
  return (
    <div className="card kpi-card">

      <h4>{title}</h4>

      <h2>{value}</h2>

      <p>{subtitle}</p>

    </div>
  );
}