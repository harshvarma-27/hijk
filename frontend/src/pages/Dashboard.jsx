import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import DateFilter from "../components/DateFilter";
import KPI from "../components/KPI";
import ForecastChart from "../components/ForecastChart";
import Insight from "../components/Insight";
import ComparisonTable from "../components/ComparisonTable";

import {
  getForecast,
  getComparison,
  getMetrics,
} from "../services/api";

export default function Dashboard() {
  const [forecast, setForecast] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [metrics, setMetrics] = useState(null);

  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const forecastRes = await getForecast();
      const comparisonRes = await getComparison();
      const metricsRes = await getMetrics();

      setForecast(forecastRes.data);
      setComparison(comparisonRes.data);
      setMetrics(metricsRes.data);

      if (comparisonRes.data.length > 0) {
        setSelectedDate(comparisonRes.data[0].startTime.substring(0, 10));
      }
    } catch (err) {
      console.log(err);
    }
  }

  const filteredComparison = comparison.filter(
    (item) => item.startTime.substring(0, 10) === selectedDate
  );

  const latestForecast =
    filteredComparison.length > 0
      ? filteredComparison[filteredComparison.length - 1].forecast
      : 0;

  const mae = metrics?.mae || 0;

  return (
    <div className="dashboard">

      <Navbar />

      <div className="dashboard-header">

        <div>
          <h1>Delivery Day Analysis</h1>
          <p>Select a delivery day to review forecasts.</p>
        </div>

        <DateFilter
          comparison={comparison}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

      </div>

      <div className="kpi-grid">

        <KPI
          title="Forecasted Wind"
          value={`${(latestForecast / 1000).toFixed(2)} GW`}
          subtitle="Latest forecast"
        />

        <KPI
          title="Average Forecast Error"
          value={`±${(mae / 1000).toFixed(2)} GW`}
          subtitle="Forecast MAE"
        />

        <KPI
          title="Expected Wind Range"
          value={`${((latestForecast - mae) / 1000).toFixed(2)} - ${(
            (latestForecast + mae) / 1000
          ).toFixed(2)} GW`}
          subtitle="Forecast ± Historical Error"
        />

      </div>

      <div className="chart-section">

        <ForecastChart data={filteredComparison} />

        <Insight metrics={metrics} />

      </div>

      <ComparisonTable data={filteredComparison} />

    </div>
  );
}