export default eventHandler((e) => {
    console.log("test", process.env.KV_REST_API_URL);
    return e.context.ratelimit;
});
