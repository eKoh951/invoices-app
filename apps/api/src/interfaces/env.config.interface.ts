export interface EnvConfig {
  port: number;
  auth0: Auth0
}

export interface Auth0 {
  domain: string;
  audience: string;
}
