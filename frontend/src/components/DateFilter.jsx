export default function DateFilter({
  comparison,
  selectedDate,
  setSelectedDate,
}) {

  const dates = [
    ...new Set(
      comparison.map((item) => item.startTime.substring(0, 10))
    ),
  ];

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  }

  return (
    <div className="date-filter">
      <label>Delivery Day</label>

      <select
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        {dates.map((date) => (
          <option key={date} value={date}>
            {formatDate(date)}
          </option>
        ))}
      </select>
    </div>
  );
}