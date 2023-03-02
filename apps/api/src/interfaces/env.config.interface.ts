export interface EnvConfig {
  port: number;
  mongoUri: string;
  auth0: Auth0;
  aws: AwsConfig;
}

export interface Auth0 {
  app: Auth0App;
  api: Auth0Api;
}

export interface Auth0App {
  domain: string;
  audience: string;
}

export interface Auth0Api {
  clientId: string;
  clientSecret: string;
  audience: string;
}

export interface AwsConfig {
  client: AwsClient;
  s3Bucket: string;
}

export interface AwsClient {
  accessKey: string;
  secretKey: string;
}
