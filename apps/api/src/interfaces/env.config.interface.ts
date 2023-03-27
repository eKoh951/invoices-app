export interface EnvConfig {
  port: number;
  mongoUri: string;
  auth0: Auth0;
  aws: AwsConfig;
}

export interface Auth0 {
  audience: string;
  domain: string;
  api: Auth0Api;
}


export interface Auth0Api {
  clientId: string;
  clientSecret: string;
}

export interface AwsConfig {
  region: string;
  client: AwsClient;
  s3Bucket: string;
}

export interface AwsClient {
  accessKey: string;
  secretKey: string;
}
