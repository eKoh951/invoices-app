// pages/api/getAccessToken.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0";

export interface AccessTokenResult {
  accessToken?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { accessToken } = await getAccessToken(req, res);
    res.status(200).json({ accessToken }); // Devuelve un objeto JSON con la propiedad accessToken
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message }); // Devuelve un objeto JSON con la propiedad message
  }
}