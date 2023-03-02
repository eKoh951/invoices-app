export interface EnvConfig {
  port: number;
  mongoUri: string;
  auth0: Auth0;
  aws: AwsConfig;
}

export interface Auth0 {
  clientId: string;
  domain: string;
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
