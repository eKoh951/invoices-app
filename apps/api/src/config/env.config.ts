import { EnvConfig } from 'src/interfaces/env.config.interface';

export default function (): EnvConfig {
  const {
    API_PORT,
    MONGO_URI,
    AUTH0_APP_DOMAIN,
    AUTH0_APP_AUDIENCE,
    AUTH0_API_CLIENT_ID,
    AUTH0_API_CLIENT_SECRET,
    AUTH0_API_AUDIENCE,
    AWS_ACCESS_KEY,
    AWS_SECRET_KEY,
    AWS_S3_BUCKET,
  } = process.env;

  return {
    port: parseInt(API_PORT, 10) || 8000,
    mongoUri: MONGO_URI,
    auth0: {
      app: {
        domain: AUTH0_APP_DOMAIN,
        audience: AUTH0_APP_AUDIENCE,
      },
      api: {
        clientId: AUTH0_API_CLIENT_ID,
        clientSecret: AUTH0_API_CLIENT_SECRET,
        audience: AUTH0_API_AUDIENCE,
      },
    },
    aws: {
      client: {
        accessKey: AWS_ACCESS_KEY,
        secretKey: AWS_SECRET_KEY,
      },
      s3Bucket: AWS_S3_BUCKET,
    },
  };
}
