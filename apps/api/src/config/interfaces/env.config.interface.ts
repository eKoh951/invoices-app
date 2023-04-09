export interface EnvConfig {
  port: number;
  appwrite: AppWrite;
}

export interface AppWrite {
  endpoint: string;
  projectId: string;
  apiKey: string;
  buckets: AppWBuckets;
  databases: AppWDatabases;
}

export interface AppWBuckets {
  bucketId: string;
}

export interface AppWDatabases {
  databaseId: string;
  collections: AppWCollections;
}

export interface AppWCollections {
  usersId: string;
  invoicesId: string;
}
