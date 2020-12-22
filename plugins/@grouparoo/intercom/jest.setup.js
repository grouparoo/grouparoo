process.env.NEXT_DISABLED = "true";

if (!process.env.SERVER_TOKEN) {
  process.env.SERVER_TOKEN = "test-server-token";
}
