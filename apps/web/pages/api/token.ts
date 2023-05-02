// pages/api/token.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0";

export interface AccessTokenResult {
  accessToken?: string;
}

// Exportamos la función getToken
export async function getToken(req: NextApiRequest, res: NextApiResponse): Promise<AccessTokenResult> {
  try {
    const { accessToken } = await getAccessToken(req, res);
    return { accessToken }; // Devuelve el resultado como una promesa
  } catch (error) {
    console.error(error);
    return { }; // Devuelve un objeto vacío en caso de error
  }
}
