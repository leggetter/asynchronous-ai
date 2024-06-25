# Hookdeck with Replicate Webhooks Demo

![Hookdeck + Replicate AI](hookdeck-replicate.png)

This application is a Node.js application that uses Replicate to run AI models with [Replicate's API](https://replicate.com/docs/get-started/nodejs).

## Before you begin

- Node.js 18 or later. The simplest way to install it is using the installer at [nodejs.org](https://nodejs.org/).
- Install the [Hookdeck CLI](https://github.com/hookdeck/hookdeck-cli):
  ```bash
  npm i -g hookdeck-cli
  ```
- Sign up for a [free Hookdeck account](https://dashboard.hookdeck.com/signup?ref=github-hookdeck-replicate-demo).
- Grab a Replicate API token from [replicate.com/account](http://replicate.com/account) and set it as an environment variable in a `.env` file:
  ```console
  export REPLICATE_API_TOKEN=...
  ```
- Install the application dependencies:
  ```bash
  npm i
  ```

## Run the app

Run the server:

```bash
npm run server
```

Run the application to trigger the image generation:

```bash
npm start
```
