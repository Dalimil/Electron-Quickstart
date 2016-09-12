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
1. Replace the `app-static` folder with your static files (including `index.html`)
2. Replace jQuery script imports (CommonJS issue):
```html
<script src="https://..." onload="window.jQuery = window.$ = module.exports;"></script>
```

## Integration: NodeJS web app -> Electron App
1. Replace the `app-dynamic` folder with your Node.js web app
2. Your `main.js` should export the `app` object instead of starting the server itself (see demo)

## Development
See for APIs like Menu: https://github.com/electron/electron-api-demos/releases
