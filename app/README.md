# DietApp – aplikacja mobilna

Angular 22 + Ionic 9 (komponenty standalone) + Capacitor 8.

## Wymagania

- Node.js 24.15+ (albo 22.22.3+), bo tego wymaga Angular CLI 22
- npm

## Uruchomienie w przeglądarce

```bash
cd app
npm install
npm start
```

Aplikacja działa pod `http://localhost:4200/`. W narzędziach deweloperskich przeglądarki
włącz widok urządzenia mobilnego, żeby zobaczyć ją jak na telefonie.

## Build i testy

```bash
npm run build   # wynik w dist/app/browser (z tego folderu korzysta Capacitor)
npm test        # testy jednostkowe (Vitest)
```

## Struktura

```
src/
  app/
    app.ts, app.html     # powłoka: ion-app + ion-router-outlet
    app.config.ts        # providery: router, Ionic
    app.routes.ts        # trasy (leniwie ładowane strony)
    home/                # strona startowa
  theme/variables.css    # motyw Ionic (tryb ciemny wg systemu)
capacitor.config.ts      # id aplikacji: pl.dietapp.app
```

Natywne projekty Android i iOS (`npx cap add android` / `npx cap add ios`) dodamy w osobnym kroku.
