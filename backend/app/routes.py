from fastapi import APIRouter

from app.services import (
    get_latest_forecast,
    get_actual_generation,
    get_comparison,
    get_metrics,
)

router = APIRouter()


@router.get("/forecast")
def forecast():

    df = get_latest_forecast().copy()

    df["startTime"] = df["startTime"].astype(str)
    df["publishTime"] = df["publishTime"].astype(str)

    return df.to_dict(orient="records")


@router.get("/actual")
def actual():

    df = get_actual_generation().copy()

    df["startTime"] = df["startTime"].astype(str)

    return df.to_dict(orient="records")


@router.get("/comparison")
def comparison():

    df = get_comparison().copy()

    df["startTime"] = df["startTime"].astype(str)

    return df.to_dict(orient="records")


@router.get("/metrics")
def metrics():

    return get_metrics()