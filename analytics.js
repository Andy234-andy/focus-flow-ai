import { inject } from "@vercel/analytics";

// Collect site traffic only. Camera frames and in-session focus data are never sent here.
inject({ mode: "production" });
