import { EnvConfig } from './interfaces/env.config.interface';

export default function (): EnvConfig {
  const {
    API_PORT,
    APPW_ENDPOINT,
    APPW_PROJECT_ID,
    APPW_API_KEY,
    APPW_BUCKET_ID,
    APPW_DATABASE_ID,
    APPW_USERS_COLLECTION_ID,
    APPW_INVOICES_COLLECTION_ID,
  } = process.env;

  return {
    port: parseInt(API_PORT, 10) || 8000,
    appwrite: {
      endpoint: APPW_ENDPOINT,
      projectId: APPW_PROJECT_ID,
      apiKey: APPW_API_KEY,
      buckets: {
        bucketId: APPW_BUCKET_ID,
      },
      databases: {
        databaseId: APPW_DATABASE_ID,
        collections: {
          usersId: APPW_USERS_COLLECTION_ID,
          invoicesId: APPW_INVOICES_COLLECTION_ID,
        },
      },
    },
  };
}
