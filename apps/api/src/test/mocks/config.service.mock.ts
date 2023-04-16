export const ConfigServiceMock = {
  get: (key: string) => {
    const keysData = {
      'auth0': {
        domain: 'fake-domain'
      },
      'auth0.api': {
        clientId: 'fake-clientId-a5ds98g4a81g9e8s4fa68f',
        clientSecret: 'fake-clientSecret-oaiwdh972h2r92qhg97dg29'
      }
    }
    return keysData[key] ?? null;
  },
};
