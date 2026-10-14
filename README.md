# Grazac Academy cohort frontend

The public course pages and applicant dashboard use React 18 and Create React App (`react-scripts` 5). Keep this project on CRA.

## Local development

Use Node 22.15+ (22.x), 24.x, or 26+. Install dependencies with `npm ci`, then copy `.env.example` to `.env.development.local`. Start the frontend with `PORT=3310 npm start`. `npm test` runs the test runner; `npm run build` creates the production bundle.

The example sets `REACT_APP_API_URL=/` and `REACT_APP_ADMIN_API_URL=/` so browser API requests use the frontend origin. CRA forwards only `/api` and `/api/...` to `API_PROXY_TARGET`, which defaults to `http://127.0.0.1:9900`. Both Academy and Admin namespaces reach the same school listener. To use an isolated backend on port 9918, set `API_PROXY_TARGET=http://127.0.0.1:9918`. Restart CRA after configuration changes.

`API_PROXY_TARGET` is server-only configuration, not a `REACT_APP_*` browser variable. The proxy keeps the API path and query unchanged. It runs only during `npm start`; it does not configure backend CORS or production ingress.

## API and production configuration

Keep local settings in `.env.development.local`, not a shared production environment file. Production builds can still set `REACT_APP_API_URL` and `REACT_APP_ADMIN_API_URL` to approved absolute origins. When unset, they retain the Academy and Admin Render fallbacks in `apikit.js`. An absolute origin bypasses the local proxy and needs its own server-side CORS policy. A production `/` base needs separately configured same-origin ingress.

Public hire calls retain their external Admin Render target; a local Admin override must not redirect them to school. Full hire service contract alignment remains separate work. Use only a Flutterwave sandbox public key for payment testing; never put secret keys in frontend configuration.

The proxy declares `http-proxy-middleware` 4.2.0 as an explicit development dependency rather than relying on CRA's transitive older version. Its documented v4 `createProxyMiddleware` and `pathFilter` API preserves `/api` by mounting at the app root. Its Node requirements also allow CRA's CommonJS setup file to load the package's ES module.

References: [CRA proxy setup](https://create-react-app.dev/docs/proxying-api-requests-in-development/), [v4.2.0 proxy API](https://github.com/chimurai/http-proxy-middleware/blob/v4.2.0/README.md), [v4.2.0 package and Node requirements](https://github.com/chimurai/http-proxy-middleware/blob/v4.2.0/package.json).
