import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function getToken(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    res.status(200).json({ accessToken });
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});