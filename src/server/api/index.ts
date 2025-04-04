import { treaty } from "@elysiajs/eden";
import { Elysia } from "elysia";
import { headers as getNextHeaders } from "next/headers";
import { fileRouter } from "./routers/file";
import { userRouter } from "./routers/user";
import { ApiErrorLogger } from "./middleware/logger";

export const app = new Elysia({ prefix: "/api" })
  .onTransform((data) => {
    ApiErrorLogger(data);
    data.set.headers["content-type"] = "text/plain";
  })
  .onError(ApiErrorLogger)
  .use(userRouter)
  .use(fileRouter);

export type App = typeof app;
export const api = treaty(app).api;

export async function headers(): Promise<Record<string, string | undefined>> {
  const h = await getNextHeaders();
  const headers: Record<string, string | undefined> = {};
  for (const [key, value] of h.entries()) {
    headers[key] = value;
  }
  return headers;
}
