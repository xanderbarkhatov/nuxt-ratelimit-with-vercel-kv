import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(10, "60s"),
});

export default eventHandler(async (e) => {
  const headers = getHeaders(e);

  const ip = headers["x-forwarded-for"];

  const { success, limit, remaining, reset } = await ratelimit.limit(ip ?? "anonymous");

  return { success, limit, remaining, reset };
});
