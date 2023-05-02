// // pages/api/getAccessToken.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { getAccessToken } from "@auth0/nextjs-auth0";

// export interface AccessTokenResult {
//   accessToken?: string;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
//   try {
//     const { accessToken } = await getAccessToken(req, res);
//     res.status(200).json({ accessToken }); // Devuelve un objeto JSON con la propiedad accessToken
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message }); // Devuelve un objeto JSON con la propiedad message
//   }
// }

// pages/api/getAccessToken.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { getAccessToken } from "@auth0/nextjs-auth0";

// export interface AccessTokenResult {
//   accessToken?: string;
// }

// // Exportamos la función handler como getToken
// export async function getToken(req: NextApiRequest, res: NextApiResponse): Promise<AccessTokenResult> {
//   try {
//     const { accessToken } = await getAccessToken(req, res);
//     res.status(200).json({ accessToken }); // Devuelve un objeto JSON con la propiedad accessToken
//     return { accessToken }; // Devuelve el resultado como una promesa
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message }); // Devuelve un objeto JSON con la propiedad message
//     return { }; // Devuelve un objeto vacío en caso de error
//   }
// }

// pages/api/getAccessToken.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getToken, AccessTokenResult } from "./token";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const accessTokenResult: AccessTokenResult = await getToken(req, res);

  if (accessTokenResult.accessToken) {
    res.status(200).json({ accessToken: accessTokenResult.accessToken });
  } else {
    res.status(500).json({ message: "Error getting access token" });
  }
}
