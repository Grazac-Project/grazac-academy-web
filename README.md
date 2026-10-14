# Grazac Academy cohort frontend

The public course pages and applicant dashboard use React 18 and Create React App (`react-scripts` 5). Keep this project on CRA.

## Local development

Use Node 22.15+ (22.x), 24.x, or 26+. Install dependencies with `npm ci`, then copy `.env.example` to `.env.development.local` and replace its placeholders. Start with `PORT=3310 npm start`. `npm test` runs the test runner; `npm run build` creates the production bundle.

Required configuration:

| Variable | Local development value |
| --- | --- |
| `REACT_APP_API_URL` | `/` for school Academy routes |
| `REACT_APP_ADMIN_API_URL` | `/` for school Admin routes |
| `REACT_APP_HIRE_API_URL` | Approved external hire origin; replace the example placeholder |
| `REACT_APP_FLW_PUBLIC_KEY` | Flutterwave sandbox public key; replace the example placeholder |
| `API_PROXY_TARGET` | School listener origin, for example `http://127.0.0.1:9900` or `http://127.0.0.1:9918` |

Missing variables are not defaulted. Never put a secret key in frontend configuration. Hire remains outside school and independent of the Admin API base; full hire contract alignment remains separate work.

Browser requests with `/` API bases stay on the frontend origin. CRA forwards only `/api` and `/api/...` to the required server-only `API_PROXY_TARGET`, keeping paths and queries unchanged. Both school namespaces reach one listener. Restart CRA after environment changes.

Keep local settings in `.env.development.local`, not a shared production environment file. The proxy runs only during `npm start`; it does not configure backend CORS or production ingress. Production builds must supply approved `REACT_APP_*` values. Absolute API origins bypass the development proxy and need their own server-side CORS policy. Production `/` bases require separately configured same-origin ingress. There are no hard-coded deployed-origin fallbacks.

The proxy uses the explicit development dependency `http-proxy-middleware` 4.2.0 rather than CRA's transitive older version. Its v4 `createProxyMiddleware` and `pathFilter` API preserves `/api` by mounting at the app root. Supported Node versions allow the CommonJS setup file to load this ES module package.

References: [CRA proxy setup](https://create-react-app.dev/docs/proxying-api-requests-in-development/), [v4.2.0 API](https://github.com/chimurai/http-proxy-middleware/blob/v4.2.0/README.md), [package and Node requirements](https://github.com/chimurai/http-proxy-middleware/blob/v4.2.0/package.json).
