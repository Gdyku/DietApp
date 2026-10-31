# DietApp – backend

FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL. Zależności i środowisko Pythona obsługuje [uv](https://docs.astral.sh/uv/).

## Wymagania

- Python 3.12+
- uv (`winget install astral-sh.uv` na Windowsie, `brew install uv` na macOS)
- Docker Desktop (do bazy PostgreSQL)

## Pierwsze uruchomienie

```bash
# z głównego folderu repo: start bazy
docker compose up -d db

# backend
cd backend
cp .env.example .env      # na Windowsie: copy .env.example .env
uv sync                   # tworzy .venv i instaluje zależności
uv run alembic upgrade head
uv run uvicorn app.main:app --reload
```

API działa pod `http://localhost:8000`, a dokumentacja (Swagger) pod `http://localhost:8000/docs`.

- `GET /health` – czy serwer żyje
- `GET /health/db` – czy jest połączenie z bazą

## Testy i lint

```bash
uv run pytest
uv run ruff check .
uv run ruff format .
```

## Migracje bazy

Po dodaniu lub zmianie modelu (klasy dziedziczącej po `app.db.Base`):

```bash
uv run alembic revision --autogenerate -m "opis zmiany"
uv run alembic upgrade head
```

Nowy plik modelu trzeba zaimportować w `alembic/env.py`, żeby autogenerate go zobaczył.

## Struktura

```
app/
  main.py      # aplikacja FastAPI, CORS, endpointy /health
  config.py    # ustawienia z .env (DATABASE_URL, CORS_ORIGINS)
  db.py        # silnik SQLAlchemy, sesja, klasa Base, get_db
alembic/       # migracje bazy
tests/         # testy pytest
```
