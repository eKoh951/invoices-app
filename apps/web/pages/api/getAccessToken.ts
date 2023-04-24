// pages/api/getAccessToken.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0";

export interface AccessTokenResult {
  accessToken?: string;
}

export async function getToken(req: NextApiRequest, res: NextApiResponse): Promise<AccessTokenResult> {
  try {
    const { accessToken } = await getAccessToken(req, res);
    return { accessToken }; // Devuelve un objeto con la propiedad accessToken
  } catch (error) {
    console.error(error);
    throw error; // Lanza el error para que pueda ser manejado por getServerSideProps
  }
}
