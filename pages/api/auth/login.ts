import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  data: {
    username: string;
    email: string;
    token: string;
  };
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {}
