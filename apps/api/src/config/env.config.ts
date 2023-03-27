import { EnvConfig } from 'src/interfaces/env.config.interface';

export default function (): EnvConfig {
  const {
    API_PORT,
    MONGO_URI,
    AUTH0_AUDIENCE,
    AUTH0_DOMAIN,
    AUTH0_API_CLIENT_ID,
    AUTH0_API_CLIENT_SECRET,
    AWS_REGION,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    AWS_S3_BUCKET,
  } = process.env;

  return {
    port: parseInt(API_PORT, 10) || 8000,
    mongoUri: MONGO_URI,
    auth0: {
      audience: AUTH0_AUDIENCE,
      domain: AUTH0_DOMAIN,
      api: {
        clientId: AUTH0_API_CLIENT_ID,
        clientSecret: AUTH0_API_CLIENT_SECRET,
      },
    },
    aws: {
      region: AWS_REGION,
      client: {
        accessKey: AWS_ACCESS_KEY,
        secretKey: AWS_SECRET_KEY,
      },
      s3Bucket: AWS_S3_BUCKET,
    },
  };
}
