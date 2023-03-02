import { EnvConfig } from 'src/interfaces/env.config.interface';

export default (): EnvConfig => ({
  port: parseInt(process.env.API_PORT, 10) || 8000,
  mongoUri: process.env.MONGO_URI,
  auth0: {
    app: {
      domain: process.env.AUTH0_APP_DOMAIN,
      audience: process.env.AUTH0_APP_AUDIENCE,
    },
    api: {
      clientId: process.env.AUTH0_API_CLIENT_ID,
      clientSecret: process.env.AUTH0_API_CLIENT_SECRET,
      audience: process.env.AUTH0_API_AUDIENCE,
    },
  },
  aws: {
    client: {
      accessKey: process.env.AWS_ACCESS_KEY,
      secretKey: process.env.AWS_SECRET_KEY,
    },
    s3Bucket: process.env.AWS_S3_BUCKET,
  },
});
