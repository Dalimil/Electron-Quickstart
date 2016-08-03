# Electron-Quickstart
**Simple desktop application using the Electron framework**

## Setup
```bash
# Install dependencies
npm install

# Run the app
npm start

# Package it
npm run-script package
```

## Integration: Static website/game -> Electron App
1. Replace the `app` folder with your static files (including `index.html`)
2. Replace jQuery script imports (CommonJS issue): `<script src="https://..." onload="window.jQuery = window.$ = module.exports;"></script>` 

## Integration: NodeJS web app -> Electron App
TODO

## Development
See for APIs like Menu: https://github.com/electron/electron-api-demos/releases
