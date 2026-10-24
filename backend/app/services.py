import pandas as pd
import numpy as np

from app.elexon import fetch_forecast, fetch_actual


def get_latest_forecast():
    """
    Keep only the latest forecast for each delivery time.
    """

    forecast = pd.DataFrame(fetch_forecast())

    forecast["publishTime"] = pd.to_datetime(forecast["publishTime"])
    forecast["startTime"] = pd.to_datetime(forecast["startTime"])

    latest = (
        forecast
        .sort_values("publishTime")
        .drop_duplicates(subset="startTime", keep="last")
        .sort_values("startTime")
    )

    # January 2026 only
    latest = latest[
        (latest["startTime"] >= "2026-01-01") &
        (latest["startTime"] < "2026-02-01")
    ]

    return latest.reset_index(drop=True)


def get_actual_generation():
    """
    Return actual wind generation.
    """

    actual = pd.DataFrame(fetch_actual())

    actual["startTime"] = pd.to_datetime(actual["startTime"])

    actual = actual.sort_values("startTime")

    return actual.reset_index(drop=True)


def get_comparison():
    """
    Merge forecast and actual generation.
    """

    forecast = get_latest_forecast()[
        ["startTime", "generation"]
    ].rename(columns={"generation": "forecast"})

    actual = get_actual_generation()[
        ["startTime", "generation"]
    ].rename(columns={"generation": "actual"})

    comparison = forecast.merge(
        actual,
        on="startTime",
        how="inner"
    )

    comparison["forecast_error"] = (
        comparison["forecast"] - comparison["actual"]
    )

    return comparison


def get_metrics():
    """
    Calculate forecast accuracy metrics.
    """

    comparison = get_comparison()

    errors = comparison["forecast_error"].to_numpy()

    if len(errors) == 0:
        return {
            "mae": None,
            "rmse": None,
            "bias": None,
            "samples": 0
        }

    return {
        "mae": round(float(np.mean(np.abs(errors))), 2),
        "rmse": round(float(np.sqrt(np.mean(errors ** 2))), 2),
        "bias": round(float(np.mean(errors)), 2),
        "samples": len(errors)
    }