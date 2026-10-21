# Render deployment — Week 11–13

Root `render.yaml` defines three free web services, one per lab, with the correct source directory, frontend build, Express start command and `/api/health` check. Week 13 generates its JWT secret on Render.

Deploy through the connected Render account. After each service is live, verify `/api/health` and the Dashboard, then copy the **actual returned public URL** into `deploymentUrl` in the corresponding `labs/week-NN/lab-metadata.json`. Run `npm run build:pages` and `npm run verify`, then publish the change through a PR.

The Portfolio button and existing weekly Pages URL will open the deployed app when `deploymentUrl` is configured. An empty URL keeps the evidence summary available until deployment succeeds. No guessed service URL or simulated Render loading screen is used.

Reference: https://render.com/docs/blueprint-spec
