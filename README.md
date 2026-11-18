# NUTRIVISION-AI Frontend

A modular React + Vite frontend demo for a human nutrition project.

## Requirements
- Node.js 18 or newer
- VS Code (recommended)

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Build
```bash
npm run build
```

## Folder guide
- `src/pages/`: one file per application page
- `src/components/`: reusable UI components
- `src/data/`: sample food nutrition data
- `src/utils/`: nutrition calculation helper
- `src/styles/`: separate CSS files

## Demo limitations
- Login profile is stored in browser localStorage; this is not secure authentication.
- Food scanner only previews an uploaded image and shows sample output. No image recognition model is connected.
- Food library values are approximate examples per 100 g.
- Nutrition goals use a deliberately simple educational estimate. They are not medical advice.
- No backend or database is included yet.
