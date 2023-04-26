import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

 export async function getToken(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    return accessToken; // Devuelve el accessToken directamente
  } catch (error) {
    console.error(error);
    throw error; // Lanza el error para que pueda ser manejado por getServerSideProps
  }
}

