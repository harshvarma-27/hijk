import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function ForecastChart({ data }) {
  const chartData = data.map((item) => ({
    time: item.startTime.substring(11, 16),
    Forecast: item.forecast,
    Actual: item.actual,
  }));

  return (
    <div className="card chart-card">
      <h3>Forecast vs Actual Generation</h3>

      <ResponsiveContainer width="100%" height={390}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 4" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="Forecast"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="Actual"
            stroke="#16a34a"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}