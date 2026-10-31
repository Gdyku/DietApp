from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = "postgresql+psycopg://dietapp:dietapp@localhost:5432/dietapp"
    # Adresy, z których aplikacja mobilna może wołać API (ng serve i Capacitor).
    cors_origins: list[str] = [
        "http://localhost:4200",
        "http://localhost",
        "capacitor://localhost",
    ]


@lru_cache
def get_settings() -> Settings:
    return Settings()
