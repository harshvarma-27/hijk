export default function ComparisonTable({ data }) {
  return (
    <div className="card table-card">

      <h3>Settlement Period Comparison</h3>

      <table>

        <thead>
          <tr>
            <th>Time</th>
            <th>Forecast</th>
            <th>Actual</th>
            <th>Error</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row) => (
            <tr key={row.startTime}>

              <td>{row.startTime.substring(11, 16)}</td>

              <td>{row.forecast.toFixed(0)} MW</td>

              <td>{row.actual.toFixed(0)} MW</td>

              <td>{row.forecast_error.toFixed(0)} MW</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}