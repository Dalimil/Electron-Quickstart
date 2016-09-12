# Electron-Quickstart
**Simple desktop application using the Electron framework.**  
It explains how to convert static websites into Electron apps and also how to integrate with Node.JS web app projects.

## When to use it
**JavaScript game packaging**: When you create a JavaScript game that would normally be run in a browser but you want it to feel like a native/desktop app. It will also behave the same everywhere because it's using the Chromium + Node.JS core so you don't have to worry about different browser compatibility.

**NPM dependent apps**: Instead of explaining to people that they need to first install Node, then install dependencies, then start the app, you simply give them the executable.

**Simple desktop app**: Simply build cross platform desktop apps with JavaScript, HTML, and CSS.

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
