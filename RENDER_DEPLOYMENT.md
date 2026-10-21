# Render deployment — Week 11–13

Root `render.yaml` defines three free web services, one per lab, with the correct source directory, frontend build, Express start command and `/api/health` check. Week 13 generates its JWT secret on Render.

Deploy through the connected Render account. After each service is live, verify `/api/health` and the Dashboard, then copy the **actual returned public URL** into `deploymentUrl` in the corresponding `labs/week-NN/lab-metadata.json`. Run `npm run build:pages` and `npm run verify`, then publish the change through a PR.

## Live services

| LAB | App | Render deploy ID |
|---|---|---|
| Week 11 | https://campus-service-68543210034-week11.onrender.com | dep-dbcg70navr4c73chnd10 |
| Week 12 | https://campus-service-68543210034-week12.onrender.com | dep-dbcg70vavr4c73chne1g |
| Week 13 | https://campus-service-68543210034-week13.onrender.com | dep-dbcg70navr4c73chnct0 |

All three deploys reached `live` in Render. The frontend, `/api/health` and `/api/requests` returned HTTP 200. Verification records are stored in each lab's `evidence/deployment.json`.

The Portfolio button and existing weekly Pages URL open the corresponding deployed app through `deploymentUrl`. The Render loading screen is managed by Render itself when a free service wakes up.

Reference: https://render.com/docs/blueprint-spec
