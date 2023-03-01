import { EnvConfig } from 'src/interfaces/env.config.interface';

const {
  API_PORT,
  MONGO_URI,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_API,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_S3_BUCKET,
} = process.env;

export default (): EnvConfig => ({
  port: parseInt(API_PORT, 10) || 8000,
  mongoUri: MONGO_URI,
  auth0: {
    clientId: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN,
    audience: AUTH0_API,
  },
  aws: {
    client: {
      accessKey: AWS_ACCESS_KEY,
      secretKey: AWS_SECRET_KEY,
    },
    s3Bucket: AWS_S3_BUCKET,
  },
});
