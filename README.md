# Wind Energy Procurement Dashboard

## Overview

This project is a decision support dashboard for UK electricity traders responsible for purchasing electricity from the day-ahead wholesale market.

The application visualizes wind generation forecasts, compares them with historical actual generation, and quantifies forecast uncertainty to support procurement decisions.

The dashboard uses January 2026 Elexon BMRS wind generation data.

---

## Features

- Secure login page
- Delivery day selection
- Latest wind generation forecast
- Expected operating range
- Forecast vs Actual line chart
- Forecast accuracy metrics
    - MAE
    - RMSE
    - Bias
- Settlement period comparison table
- Responsive UI

---

## Technology Stack

### Frontend

- React
- React Router
- Recharts
- CSS

### Backend

- Python
- FastAPI
- Pandas
- NumPy

### Deployment

- Docker
- Docker Compose
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```
energy-dashboard/

backend/
    main.py
    requirements.txt
    Dockerfile
    ...

frontend/
    src/
        components/
        pages/
        assets/
    package.json
    Dockerfile

docker-compose.yml
README.md
```

---

## Running Locally

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Running with Docker

```bash
docker compose up --build
```

Backend

```
http://localhost:8000
```

Frontend

```
http://localhost:5173
```

---

## Dashboard Workflow

1. Select a delivery day.
2. View the latest wind generation forecast.
3. Observe the expected operating range based on historical forecast error.
4. Compare forecasted and actual wind generation.
5. Review forecast accuracy using MAE, RMSE, and Bias.
6. Examine settlement period level comparisons.

---

## Metrics

### MAE

Represents the typical difference between forecasted and actual wind generation.

### RMSE

Provides greater emphasis on larger forecasting errors.

### Bias

Indicates whether forecasts generally overestimate or underestimate actual generation.

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/metrics` | Forecast accuracy metrics |
| `/comparison` | Forecast vs Actual data |
| `/forecast` | Latest forecasts |

---

## AI Tools Used

The following AI tools were used to assist development:

- ChatGPT (design discussions, React components, documentation)
- Claude (code refinement and implementation assistance)

All generated code was reviewed, modified, tested, and integrated manually.

---

## Future Improvements

- Multi-day forecast planning
- Confidence interval visualization
- Procurement recommendation engine
- Export reports
- Historical trend analytics

---

## Deployment

Frontend

```
<your-vercel-url>
```

Backend

```
<your-render-url>
```

---

## Data Source

Elexon BMRS

Wind Forecast Dataset (WINDFOR)

Wind Actual Generation Dataset (FUELHH)

January 2026