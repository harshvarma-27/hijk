import requests

BASE_URL = "https://data.elexon.co.uk/bmrs/api/v1/datasets"


def fetch_forecast():
    """
    Fetch wind forecast data (WINDFOR).
    """

    url = f"{BASE_URL}/WINDFOR/stream"

    params = {
        "publishDateTimeFrom": "2026-01-01T00:00:00Z",
        "publishDateTimeTo": "2026-02-01T00:00:00Z"
    }

    response = requests.get(url, params=params, timeout=30)
    response.raise_for_status()

    return response.json()


def fetch_actual():
    """
    Fetch actual wind generation (FUELHH).
    """

    url = f"{BASE_URL}/FUELHH/stream"

    params = {
        "settlementDateFrom": "2026-01-01",
        "settlementDateTo": "2026-01-31",
        "fuelType": "WIND"
    }

    response = requests.get(url, params=params, timeout=30)
    response.raise_for_status()

    return response.json()