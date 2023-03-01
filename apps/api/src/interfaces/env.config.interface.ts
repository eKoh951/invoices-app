export interface EnvConfig {
  port: number;
  mongoUri: string;
  auth0: Auth0;
  aws: AWS;
}

export interface Auth0 {
  clientId: string;
  domain: string;
  audience: string;
  adminToken: string;
}

export interface AWS {
  client: AwsClient;
  s3Bucket: string;
}

export interface AwsClient {
  accessKey: string;
  secretKey: string;
}
