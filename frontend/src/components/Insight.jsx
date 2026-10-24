export default function Insight({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="card insight-card">
      <h3>Forecast Accuracy</h3>

      <div className="metric-row">
        <span>MAE</span>
        <strong>± {(metrics.mae / 1000).toFixed(2)} GW</strong>
      </div>
      <small>
        Actual wind generation is typically within ±
        {(metrics.mae / 1000).toFixed(2)} GW of the forecast.
      </small>

      <div className="metric-row" style={{ marginTop: "18px" }}>
        <span>RMSE</span>
        <strong>{(metrics.rmse / 1000).toFixed(2)} GW</strong>
      </div>
      <small>
        Larger forecasting errors may reach around ±
        {(metrics.rmse / 1000).toFixed(2)} GW.
      </small>

      <div className="metric-row" style={{ marginTop: "18px" }}>
        <span>Bias</span>
        <strong>
          {metrics.bias > 0 ? "+" : ""}
          {(metrics.bias / 1000).toFixed(2)} GW
        </strong>
      </div>

      <small>
        {metrics.bias > 0
          ? `Forecasts usually overestimate wind generation by about ${(metrics.bias / 1000).toFixed(2)} GW. Consider planning for approximately ${(metrics.bias / 1000).toFixed(2)} GW less wind than forecast.`
          : `Forecasts usually underestimate wind generation by about ${Math.abs(metrics.bias / 1000).toFixed(2)} GW. Actual wind may be higher than forecast.`}
      </small>

      <hr />

      <p>Historical Evaluation</p>
      <strong>{metrics.samples} settlement periods (January 2026)</strong>
    </div>
  );
}