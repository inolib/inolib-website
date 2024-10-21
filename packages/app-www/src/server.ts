import { createServer } from "node:http";
import { parse } from "node:url";

import next from "next";

void (async () => {
  const env = process.env.NODE_ENV;
  const hostname = "localhost";
  const port = Number.parseInt(process.env.PORT ?? "8000", 10);

  const app = next({ dev: env === "development", hostname, port });

  await app.prepare();

  createServer((req, res) => {
    void (async () => {
      await app.getRequestHandler()(req, res, parse(req.url as string, true));
    })();
  }).listen(port);

  console.log(`Server listening on http://${hostname}:${port} (${env})`);
})();
