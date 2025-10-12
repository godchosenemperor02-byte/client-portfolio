// sanity/config.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y3plf0ck",     // replace this
  dataset: "production",          // replace if yours is different
  apiVersion: "2025-10-11",       // use a fixed date
  useCdn: true,                   // true = fast, cached data
});
