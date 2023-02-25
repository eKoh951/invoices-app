import { EnvConfig } from "src/interfaces/env.config.interface";

export default (): EnvConfig => ({
  port: parseInt(process.env.API_PORT, 10) || 8000,
  auth0: {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_API,
  },
});
